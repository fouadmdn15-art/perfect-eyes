"use client";

import { useEffect, useState } from "react";

type Lang = "fr" | "ar" | "en";

const copy = {
  fr: {
    nav: ["Accueil", "Expertise", "Collections", "Avis", "Contact"],
    badge: "Optique contemporaine · Témara",
    title: <>La précision pour vos yeux.<br/><em>Le style pour vous.</em></>,
    intro: "Examen de la vue, montures de caractère et conseils personnalisés — une expérience optique pensée dans les moindres détails.",
    book: "Prendre rendez-vous", explore: "Explorer la collection",
    stats: [["5.0", "Note Google"], ["55+", "Avis clients"], ["3", "Expertises"]],
    expertise: "L’expertise qui change votre regard", expertiseSub: "Technicité, écoute et style réunis dans un même espace.",
    services: [["01", "Examen de la vue", "Une mesure attentive et précise pour une correction parfaitement adaptée."], ["02", "Montures & solaires", "Des modèles contemporains sélectionnés pour leur allure, confort et qualité."], ["03", "Lentilles de contact", "Adaptation, conseils et suivi personnalisé pour une liberté au quotidien."]],
    collection: "Une monture. Une signature.", collectionSub: "Optiques, solaires, verres progressifs, photochromiques et anti-lumière bleue.", discover: "Voir sur Instagram", instagram: "Instagram", facebook: "Facebook", mapLabel: "Nous trouver sur Google Maps", phoneLabel: "Appelez-nous", emailLabel: "Écrivez-nous",
    reviews: "Ce sont eux qui en parlent le mieux", reviewsSub: "Des expériences authentiques partagées par nos clients sur Google.", more: "Lire tous les avis Google",
    visit: "Votre nouvelle vision commence ici.", directions: "Ouvrir l’itinéraire", hours: "Lun – Sam · 10:00 – 20:30", closed: "Dimanche · Fermé",
    address: "Immeuble 30, magasin 47, Projet Dyar Dakhama Groupe 05, Ain Atik, Témara 12013",
    footer: "Pour le bien être visuel", rights: "Tous droits réservés.",
  },
  ar: {
    nav: ["الرئيسية", "خبرتنا", "المجموعات", "الآراء", "تواصل معنا"], badge: "بصريات عصرية · تمارة",
    title: <>الدقة لعينيك.<br/><em>والأناقة لك.</em></>, intro: "فحص النظر، إطارات مميزة ونصائح شخصية — تجربة بصرية مدروسة في أدق التفاصيل.",
    book: "احجز موعداً", explore: "اكتشف المجموعة", stats: [["5.0", "تقييم Google"], ["+55", "رأي زبون"], ["3", "تخصصات"]],
    expertise: "خبرة تغيّر نظرتك", expertiseSub: "الدقة، حسن الاستماع والأناقة في فضاء واحد.",
    services: [["01", "فحص النظر", "قياس دقيق لاختيار التصحيح الأنسب لعينيك."], ["02", "نظارات طبية وشمسية", "موديلات عصرية مختارة للأناقة والراحة والجودة."], ["03", "العدسات اللاصقة", "ملاءمة ونصائح ومتابعة شخصية لراحة يومية."]],
    collection: "إطار واحد. بصمتك الخاصة.", collectionSub: "نظارات طبية وشمسية، عدسات تقدمية، متلونة ومضادة للضوء الأزرق.", discover: "شاهد على Instagram", instagram: "أنستغرام", facebook: "فيسبوك", mapLabel: "موقعنا على خرائط Google", phoneLabel: "اتصل بنا", emailLabel: "راسلنا عبر البريد",
    reviews: "زبناؤنا يحكون تجربتهم", reviewsSub: "تجارب حقيقية شاركها زبناؤنا على Google.", more: "اقرأ كل الآراء على Google",
    visit: "رؤيتك الجديدة تبدأ من هنا.", directions: "افتح الاتجاهات", hours: "الاثنين – السبت · 10:00 – 20:30", closed: "الأحد · مغلق",
    address: "العمارة 30، المحل 47، مشروع ديار الدخامة، المجموعة 05، عين عتيق، تمارة 12013", footer: "من أجل راحة بصرية أفضل", rights: "جميع الحقوق محفوظة.",
  },
  en: {
    nav: ["Home", "Expertise", "Collections", "Reviews", "Contact"], badge: "Contemporary optics · Temara",
    title: <>Precision for your eyes.<br/><em>Style for you.</em></>, intro: "Eye examinations, distinctive frames and personal advice — an optical experience considered down to the finest detail.",
    book: "Book an appointment", explore: "Explore the collection", stats: [["5.0", "Google rating"], ["55+", "Customer reviews"], ["3", "Areas of expertise"]],
    expertise: "Expertise that changes your outlook", expertiseSub: "Precision, listening and style — all in one space.",
    services: [["01", "Eye examination", "Attentive, precise measurement for a correction made for you."], ["02", "Frames & sunglasses", "Contemporary models selected for style, comfort and quality."], ["03", "Contact lenses", "Fitting, advice and personal follow-up for everyday freedom."]],
    collection: "One frame. Your signature.", collectionSub: "Optical and sun frames, progressive, photochromic and blue-light lenses.", discover: "View on Instagram", instagram: "Instagram", facebook: "Facebook", mapLabel: "Find us on Google Maps", phoneLabel: "Call us", emailLabel: "Email us",
    reviews: "Our clients say it best", reviewsSub: "Genuine experiences shared by our customers on Google.", more: "Read all Google reviews",
    visit: "Your new vision starts here.", directions: "Open directions", hours: "Mon – Sat · 10:00 – 20:30", closed: "Sunday · Closed",
    address: "Building 30, shop 47, Projet Dyar Dakhama Groupe 05, Ain Atik, Temara 12013", footer: "For your visual wellbeing", rights: "All rights reserved.",
  },
};

const reviews = [
  ["Salma Eddarhri", "J’ai été vraiment impressionnée par l’accueil et le service de Wafae. Elle a pris le temps de m’expliquer les différentes options de lunettes."],
  ["Safae Lamghari", "Wafae est une opticienne exceptionnelle, très compétente et extrêmement serviable. On sent tout de suite le professionnalisme."],
  ["KHADRAOUI NAJIB", "Excellente expérience du début à la fin ! Le rapport qualité/prix est irréprochable."],
];
const googleUrl = "https://share.google/Eg3DVqJC1JaaaEGTf";
const whatsappUrl = "https://wa.me/212637342455?text=Bonjour%20Perfect%20Eyes%2C%20je%20souhaite%20prendre%20rendez-vous.";
const videoUrl = "https://videos.pexels.com/video-files/5241104/5241104-hd_1920_1080_25fps.mp4";
const instagramUrl = "https://www.instagram.com/_perfect_eyes";
const facebookUrl = "https://www.facebook.com/share/1BKjVCsyhZ/";
const emailAddress = "perfecteyes21@gmail.com";
const mapsEmbedUrl = "https://www.google.com/maps?q=Immeuble%2030%2C%20magasin%2047%2C%20Projet%20Dyar%20Dakhama%20Groupe%2005%2C%20Ain%20Atik%2C%20T%C3%A9mara%2012013&output=embed";
const serviceImages = [
  "https://images.pexels.com/photos/38167591/pexels-photo-38167591/free-photo-of-optometrist-conducting-eye-exam-with-slit-lamp.jpeg?auto=compress&fit=crop&w=1200&q=85",
  "https://images.pexels.com/photos/32593248/pexels-photo-32593248/free-photo-of-optician-in-store-displaying-eyeglasses-collection.jpeg?auto=compress&fit=crop&w=1200&q=85",
  "https://images.pexels.com/photos/36569539/pexels-photo-36569539/free-photo-of-eye-care-essentials-contact-lenses-and-eyeglasses.jpeg?auto=compress&fit=crop&w=1200&q=85",
];

function WhatsAppIcon() { return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.05 3A12.8 12.8 0 0 0 5 22.24L3.2 29l6.92-1.82A12.8 12.8 0 1 0 16.05 3Zm0 23.42c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.1 1.08 1.1-4-.25-.41a10.62 10.62 0 1 1 9.11 5.06Zm5.82-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.55 9.55 0 0 1-1.77-2.2c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.25 3.44 5.46 4.83.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"/></svg> }
function InstagramIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/></svg> }
function FacebookIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.7 22v-8.3h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.7-1.6H17V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.2h2.8V22h3.4Z"/></svg> }
function PhoneIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M7.1 3.8 4.8 5.6c-.8.6-.9 1.8-.5 2.7 2.4 5.4 6.1 9.1 11.5 11.5.9.4 2.1.3 2.7-.5l1.8-2.3c.5-.6.4-1.5-.2-2l-3.1-2.4c-.6-.5-1.5-.4-2 .2l-1.1 1.4a13.4 13.4 0 0 1-4.2-4.2l1.4-1.1c.6-.5.7-1.4.2-2L9 3.9c-.5-.6-1.4-.7-2-.1Z"/></svg> }
function MailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <span className={`logoLockup ${footer ? "footerLogo" : ""}`} aria-label="Perfect Eyes — Pour le bien être visuel">
    <img src="/brand/perfect-eyes-logo-final.png" alt="Perfect Eyes — Pour le bien être visuel" />
  </span>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);
  const t = copy[lang];
  return <main dir={lang === "ar" ? "rtl" : "ltr"}>
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Perfect Eyes"><BrandLogo/></a>
      <nav>{t.nav.map((n, i) => <a key={n} href={['#home','#expertise','#collections','#reviews','#contact'][i]}>{n}</a>)}</nav>
      <div className="headerEnd"><div className="langs">{(["fr","ar","en"] as Lang[]).map(l => <button key={l} className={lang===l?"active":""} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><a className="miniWa" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon/></a></div>
    </header>

    <section className="hero" id="home">
      <video className="heroVideo" autoPlay muted loop playsInline poster="https://images.pexels.com/photos/5621864/pexels-photo-5621864.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920"><source src={videoUrl} type="video/mp4"/></video>
      <div className="heroOverlay"/><div className="blueGlow"/><div className="grain"/>
      <div className="heroContent"><p className="badge"><i/>{t.badge}</p><h1>{t.title}</h1><p className="heroLead">{t.intro}</p><div className="actions"><a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon/>{t.book}</a><a className="btn ghost" href="#collections">{t.explore}</a></div></div>
      <div className="heroStats">{t.stats.map(s=><div key={s[1]}><strong>{s[0]}</strong><span>{s[1]}</span></div>)}</div><span className="scrollCue">SCROLL <i/></span>
    </section>

    <section className="expertise" id="expertise"><div className="sectionHead reveal"><p className="kicker">PERFECT CARE</p><h2>{t.expertise}</h2><p>{t.expertiseSub}</p></div><div className="serviceGrid">{t.services.map((s,i)=><article className="service reveal" style={{transitionDelay:`${i*100}ms`}} key={i}><div className="serviceImage"><img src={serviceImages[i]} alt={s[1]} loading="lazy"/><span>{s[0]}</span></div><div className="serviceBody"><h3>{s[1]}</h3><p>{s[2]}</p></div></article>)}</div></section>

    <section className="collection" id="collections"><div className="collectionVisual"><div className="visualOne"/><div className="visualTwo"/><span className="orbit">PERFECT EYES · STYLE · VISION ·</span></div><div className="collectionCopy reveal"><p className="kicker">CURATED EYEWEAR</p><h2>{t.collection}</h2><p>{t.collectionSub}</p><div className="socialCtas"><a className="socialCta instagram" href={instagramUrl} target="_blank" rel="noreferrer" aria-label={t.instagram}><InstagramIcon/></a><a className="socialCta facebook" href={facebookUrl} target="_blank" rel="noreferrer" aria-label={t.facebook}><FacebookIcon/></a></div></div></section>

    <section className="reviews" id="reviews"><div className="sectionHead reveal"><p className="kicker">5.0 · GOOGLE REVIEWS</p><h2>{t.reviews}</h2><p>{t.reviewsSub}</p></div><div className="reviewTrack">{reviews.map((r,i)=><article className="review reveal" style={{transitionDelay:`${i*100}ms`}} key={r[0]}><div className="reviewTop"><span>{r[0][0]}</span><div><strong>{r[0]}</strong><small>Google review · vérifié</small></div><b>G</b></div><div className="stars">★★★★★</div><p>“{r[1]}”</p></article>)}</div><a className="allReviews" href={googleUrl} target="_blank" rel="noreferrer"><span className="googleMark">G</span><strong>{t.more}</strong></a></section>

    <section className="visit" id="contact"><div className="visitGlow"/><div className="visitGrid"><div className="visitCopy reveal"><p className="kicker">PERFECT EYES · TÉMARA</p><h2>{t.visit}</h2><p className="address">{t.address}</p><div className="schedule"><span>{t.hours}</span><span>{t.closed}</span></div><div className="actions contactActions"><a className="phone" href="tel:+212637342455"><span>{t.phoneLabel}</span><b>06 37 34 24 55</b></a><a className="phone email" href={`mailto:${emailAddress}`}><span>{t.emailLabel}</span><b>{emailAddress}</b></a></div></div><a className="mapCard reveal" href={googleUrl} target="_blank" rel="noreferrer" aria-label={t.mapLabel}><iframe src={mapsEmbedUrl} title={t.mapLabel} loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1}/><span><strong>{t.mapLabel}</strong></span></a></div></section>

    <footer><BrandLogo footer/><p>© 2026 Perfect Eyes. {t.rights}</p><div className="footerSocials"><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon/></a><a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon/></a><a href="tel:+212637342455" aria-label={t.phoneLabel}><PhoneIcon/></a><a href={`mailto:${emailAddress}`} aria-label={`${t.emailLabel}: ${emailAddress}`}><MailIcon/></a></div></footer>
    <a className="floatingWa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><span className="waPulse"/><WhatsAppIcon/><b>WhatsApp</b></a>
  </main>;
}
