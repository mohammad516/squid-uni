"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * ClientsCarousel - JS-driven smooth infinite marquee
 *
 * ملاحظات:
 * - البيانات الآن ديناميكية من قاعدة البيانات
 * - يمكنك تعديل speedPxPerSec لزيادة/تقليل السرعة (بيكسل/ثانية)
 * - نستخدم loading="eager" + unoptimized لتقليل layout-shift من next/image.
 */

interface ClientCategory {
  id: string;
  title: string;
  slug: string;
  clientLogo: string;
}

export default function ClientsCarousel() {
  const [clientCategories, setClientCategories] = useState<ClientCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);      // يحتوي المجموعتين
  const groupRef = useRef<HTMLDivElement | null>(null);      // يشير للمجموعة الأولى (لقياس العرض)
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const offsetRef = useRef(0);        // مقدار التحريك الحالي بالبيكسل
  const [isPaused, setIsPaused] = useState(false);
  const [groupWidth, setGroupWidth] = useState(0);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const speedPxPerSec = 60; // عدل السرعة (بيكسل / ثانية)

  // جلب البيانات من API
  useEffect(() => {
    const fetchClientCategories = async () => {
      try {
        const response = await fetch('/api/categories?clients=true');
        if (response.ok) {
          const data = await response.json();
          // Filter to only include categories with clientLogo
          const filtered = data.filter((cat: any) => cat.clientLogo);
          setClientCategories(filtered);
        }
      } catch (error) {
        console.error('Error fetching client categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientCategories();
  }, []);

  // زيادة العد عند تحميل كل صورة - نستخدم هذا للتأكد من قياس العرض بعد تحميل الصور
  const handleImageLoad = useCallback(() => {
    setImagesLoadedCount((c) => c + 1);
  }, []);

  // قياس عرض المجموعة الأولى (بالبكسل) بعد تحميل الصور أو عند تغيير حجم الشاشة
  useEffect(() => {
    if (clientCategories.length === 0) return;

    const measure = () => {
      const g = groupRef.current;
      if (g) {
        // في Safari، استخدم scrollWidth للحصول على العرض الدقيق
        const rect = g.getBoundingClientRect();
        const scrollWidth = g.scrollWidth;
        const offsetWidth = g.offsetWidth;
        // استخدم أكبر قيمة لضمان الدقة في Safari
        const w = Math.max(scrollWidth, offsetWidth, rect.width);
        setGroupWidth(Math.round(w));
      }
    };

    // ننتظر حتى تُحمّل الصور (أو بعد فاصل قصير كاحتياط)
    if (imagesLoadedCount >= clientCategories.length * 2) { // *2 لأن لدينا مجموعتين
      // قياس بعد تأكيد التحميل
      measure();
    }

    // قياس أيضاً عند تغيير حجم النافذة
    const ro = new ResizeObserver(() => {
      // إعادة قياس
      measure();
    });
    if (groupRef.current) ro.observe(groupRef.current);

    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      if (ro && groupRef.current) ro.disconnect();
    };
  }, [imagesLoadedCount, clientCategories.length]);

  // animation loop
  useEffect(() => {
    if (!groupWidth) return; // لا تبدأ حتى نعرف عرض المجموعة

    lastTimeRef.current = null;
    const step = (time: number) => {
      if (isPaused) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000; // بالثواني
      lastTimeRef.current = time;

      // تحديث offset
      offsetRef.current += speedPxPerSec * delta;

      // تكرار عندما يتجاوز عرض المجموعة
      if (offsetRef.current >= groupWidth) {
        // ناقل بكسل: نطرح العرض (modulo)
        offsetRef.current = offsetRef.current - groupWidth;
      }

      // طبق التحويل — نستخدم تحريفا على track كاملاً
      if (trackRef.current) {
        // نحرك بقيمة سالبة (نحو اليسار)
        const x = -offsetRef.current;
        // translate by px (نستخدم backface و translate3d لتسريع GPU)
        const transformValue = `translate3d(${x}px, 0, 0)`;
        trackRef.current.style.transform = transformValue;
        // Safari webkit prefix
        (trackRef.current.style as any).webkitTransform = transformValue;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [groupWidth, isPaused, speedPxPerSec]);

  // pause handlers (hover + touch)
  const onEnter = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);
  const onTouchStart = () => setIsPaused(true);
  const onTouchEnd = () => setIsPaused(false);

  if (loading) {
    return (
      <section className="relative py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#171717] via-[#DA0037] to-[#171717] bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>
          <div className="flex gap-4 justify-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[220px] h-[140px] bg-gray-200 animate-pulse rounded" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (clientCategories.length === 0) {
    return null;
  }

  return (
    <section className="relative py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-[#171717] via-[#DA0037] to-[#171717] bg-clip-text text-transparent">
            Our Clients
          </span>
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* TRACK: نحرّك هذا العنصر بالـ JS (translate3d) */}
          <div
            ref={trackRef}
            className="carousel-track-js"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              // لا تضع transition هنا — لأننا نستخدم rAF
              willChange: "transform",
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
            } as React.CSSProperties}
          >
            {/* GROUP 1 */}
            <div ref={groupRef} className="carousel-group-js">
              {clientCategories.map((category, i) => (
                <div key={`g1-${category.id}`} className="carousel-item-js">
                  <Link href={`/category/${category.slug}`} className="block w-full h-full">
                    <Image
                      src={category.clientLogo}
                      alt={category.title}
                      width={900}
                      height={400}
                      loading="eager"
                      unoptimized
                      onLoadingComplete={handleImageLoad}
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* GROUP 2 (نسخة مكررة للانفينيتي) */}
            <div className="carousel-group-js">
              {clientCategories.map((category, i) => (
                <div key={`g2-${category.id}`} className="carousel-item-js">
                  <Link href={`/category/${category.slug}`} className="block w-full h-full">
                    <Image
                      src={category.clientLogo}
                      alt={category.title}
                      width={900}
                      height={400}
                      loading="eager"
                      unoptimized
                      onLoadingComplete={handleImageLoad}
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-track-js {
          gap: 0;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }

        .carousel-group-js {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-wrap: nowrap;
          flex-wrap: nowrap;
          gap: 28px; /* المسافة بين الشعارات */
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        /* عنصر الشعار - نعطي عرض ثابت متجاوب لثبات القياسات */
        .carousel-item-js {
          -webkit-flex: 0 0 220px;
          flex: 0 0 220px;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          height: 140px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
        }

        .carousel-item-js :global(img) {
          height: 100%;
          width: auto;
          display: block;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        @media (min-width: 640px) {
          .carousel-item-js {
            -webkit-flex: 0 0 260px;
            flex: 0 0 260px;
            height: 160px;
            gap: 32px;
          }
        }

        @media (min-width: 1024px) {
          .carousel-item-js {
            -webkit-flex: 0 0 320px;
            flex: 0 0 320px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
