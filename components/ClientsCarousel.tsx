"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

/**
 * ClientsCarousel - JS-driven smooth infinite marquee
 *
 * ملاحظات:
 * - ضع صورك في public/customers logo/
 * - يمكنك تعديل speedPxPerSec لزيادة/تقليل السرعة (بيكسل/ثانية)
 * - نستخدم loading="eager" + unoptimized لتقليل layout-shift من next/image.
 */

const clientLogos = [
  "advanced.png",
  "alshams1.png",
  "allotaxi.png",
  "aoun.png",
  "black.png",
  "carr.png",
  "cremino1.png",
  "emsherif.png",
  "hola.png",
  "metro.png",
  "pat.png",
  "sant.png",
];

export default function ClientsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);      // يحتوي المجموعتين
  const groupRef = useRef<HTMLDivElement | null>(null);      // يشير للمجموعة الأولى (لقياس العرض)
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const offsetRef = useRef(0);        // مقدار التحريك الحالي بالبيكسل
  const [isPaused, setIsPaused] = useState(false);
  const [groupWidth, setGroupWidth] = useState(0);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const speedPxPerSec = 60; // عدل السرعة (بيكسل / ثانية)

  // زيادة العد عند تحميل كل صورة - نستخدم هذا للتأكد من قياس العرض بعد تحميل الصور
  const handleImageLoad = useCallback(() => {
    setImagesLoadedCount((c) => c + 1);
  }, []);

  // قياس عرض المجموعة الأولى (بالبكسل) بعد تحميل الصور أو عند تغيير حجم الشاشة
  useEffect(() => {
    const measure = () => {
      const g = groupRef.current;
      if (g) {
        // استخدم scrollWidth أو offsetWidth (أي منهما أدق حسب المحتوى)
        const w = g.getBoundingClientRect().width;
        setGroupWidth(Math.round(w));
      }
    };

    // ننتظر حتى تُحمّل الصور (أو بعد فاصل قصير كاحتياط)
    if (imagesLoadedCount >= clientLogos.length) {
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
  }, [imagesLoadedCount]);

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
        trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
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
            }}
          >
            {/* GROUP 1 */}
            <div ref={groupRef} className="carousel-group-js">
              {clientLogos.map((logo, i) => (
                <div key={`g1-${i}`} className="carousel-item-js">
                  <Image
                    src={`/customers logo/${logo}`}
                    alt={logo.replace(".png", "")}
                    width={900}
                    height={400}
                    loading="eager"
                    unoptimized
                    onLoadingComplete={handleImageLoad}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* GROUP 2 (نسخة مكررة للانفينيتي) */}
            <div className="carousel-group-js">
              {clientLogos.map((logo, i) => (
                <div key={`g2-${i}`} className="carousel-item-js">
                  <Image
                    src={`/customers logo/${logo}`}
                    alt={logo.replace(".png", "")}
                    width={900}
                    height={400}
                    loading="eager"
                    unoptimized
                    onLoadingComplete={handleImageLoad}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-track-js {
          gap: 0;
        }

        .carousel-group-js {
          display: flex;
          flex-wrap: nowrap;
          gap: 28px; /* المسافة بين الشعارات */
        }

        /* عنصر الشعار - نعطي عرض ثابت متجاوب لثبات القياسات */
        .carousel-item-js {
          flex: 0 0 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 140px;
          box-sizing: border-box;
        }

        .carousel-item-js :global(img) {
          height: 100%;
          width: auto;
          display: block;
        }

        @media (min-width: 640px) {
          .carousel-item-js {
            flex: 0 0 260px;
            height: 160px;
            gap: 32px;
          }
        }

        @media (min-width: 1024px) {
          .carousel-item-js {
            flex: 0 0 320px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
