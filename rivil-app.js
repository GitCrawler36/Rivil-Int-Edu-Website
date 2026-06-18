/* ==========================================================================
   Rivil International Education Consultants — shared site logic
   Plain vanilla JavaScript. No dependencies. Works on GitHub Pages as-is.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Constants ---------- */

  var WHATSAPP_NUMBER = '94114341888';
  var PHONE_DISPLAY = '+94 11 434 1888';
  var PHONE_TEL = '+94114341888';
  var EMAIL = 'rivilemail@gmail.com';
  var ADDRESS = '290, 1st Floor, Galle Road, Mount Lavinia, Sri Lanka';
  var LOGO_SRC = 'Rivil_Main_logo-removebg-preview.png';

  var SOCIALS = [
    { name: 'Facebook', url: 'https://www.facebook.com/riviledu/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', url: 'https://www.instagram.com/rivilinternational/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
    { name: 'LinkedIn', url: 'https://lk.linkedin.com/company/rivil-international-education-consultants', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
    { name: 'YouTube', url: 'https://www.youtube.com/user/riviledu/videos', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { name: 'X (Twitter)', url: 'https://x.com/riviledu/', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z' }
  ];

  var DEST_IMAGES = {
    'new-zealand': 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80',
    'uk': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    'australia': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
    'canada': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    'malaysia': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
    'singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80'
  };

  /* Full-bleed landscape hero photos (1920px) used on the destination pages. */
  var HERO_IMAGES = {
    'new-zealand': 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=85',
    'australia': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=85',
    'uk': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=85',
    'canada': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85',
    'malaysia': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=85',
    'singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=85'
  };

  var FLAG_EMOJIS = {
    'new-zealand': '🇳🇿',
    'uk': '🇬🇧',
    'australia': '🇦🇺',
    'canada': '🇨🇦',
    'malaysia': '🇲🇾',
    'singapore': '🇸🇬'
  };

  var WHATSAPP_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

  /* ---------- Helpers ---------- */

  function waLink(message) {
    var url = 'https://wa.me/' + WHATSAPP_NUMBER;
    return message ? url + '?text=' + encodeURIComponent(message) : url;
  }

  function getDestination(slug) {
    var list = (window.RIVIL_DATA && window.RIVIL_DATA.destinations) || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug) return list[i];
    }
    return null;
  }

  function currentPage() {
    var p = window.location.pathname.split('/').pop();
    return p && p.length ? p : 'index.html';
  }

  function svgIcon(path, cls) {
    return '<svg class="' + (cls || 'w-5 h-5') + '" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="' + path + '"/></svg>';
  }

  function initials(name) {
    return name.split(' ').map(function (w) { return w.charAt(0); }).slice(0, 2).join('').toUpperCase();
  }

  /* ---------- Navbar ---------- */

  window.initNavbar = function () {
    var el = document.getElementById('navbar');
    if (!el) return;

    var page = currentPage();
    var destinations = window.RIVIL_DATA.destinations;
    var onDestPage = destinations.some(function (d) { return d.page === page; }) || page === 'destinations-other.html';

    function linkCls(href) {
      return href === page
        ? 'text-pine-800 font-semibold'
        : 'text-pine-950/70 hover:text-pine-800 font-medium';
    }

    function mobileLinkCls(href) {
      return href === page
        ? 'bg-pine-50 text-pine-800 font-semibold'
        : 'text-pine-950/80 hover:bg-pine-50 font-medium';
    }

    var megaMenuItems = destinations.map(function (d) {
      var flag = FLAG_EMOJIS[d.slug] || '🌍';
      var active = d.page === page;
      return '<a href="' + d.page + '" class="group flex items-start gap-3 rounded-xl p-3.5 transition-colors ' + (active ? 'bg-pine-50' : 'hover:bg-pine-50') + '">' +
        '<span class="shrink-0 mt-0.5 text-[1.6rem] leading-none">' + flag + '</span>' +
        '<span class="min-w-0">' +
          '<span class="block text-sm font-semibold text-pine-950 group-hover:text-pine-800">' + d.name + '</span>' +
          '<span class="block text-xs text-pine-950/55 leading-snug mt-0.5 line-clamp-2">' + d.tagline + '</span>' +
        '</span>' +
      '</a>';
    }).join('');

    var desktopLinks =
      '<a href="index.html" class="px-3 py-2 text-sm transition-colors ' + linkCls('index.html') + '">Home</a>' +
      '<a href="about.html" class="px-3 py-2 text-sm transition-colors ' + linkCls('about.html') + '">About</a>' +
      '<div class="relative" id="nav-dd-wrap">' +
        '<button id="nav-dd-btn" type="button" aria-expanded="false" class="flex items-center gap-1 px-3 py-2 text-sm transition-colors ' + (onDestPage ? 'text-pine-800 font-semibold' : 'text-pine-950/70 hover:text-pine-800 font-medium') + '">' +
          'Study Destinations' +
          '<svg id="nav-dd-chevron" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>' +
        '</button>' +
        '<div id="nav-dd-panel" class="hidden absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[600px] bg-white rounded-2xl shadow-xl shadow-pine-950/10 ring-1 ring-pine-950/5 overflow-hidden z-50">' +
          '<div class="p-3 grid grid-cols-3 gap-1">' + megaMenuItems + '</div>' +
          '<div class="border-t border-pine-950/10 bg-pine-50/50 px-5 py-3 flex items-center justify-between gap-4">' +
            '<p class="text-xs text-pine-950/50">Not sure where to study? <a href="eligibility.html" class="font-semibold text-pine-800 hover:text-pine-700">Try our eligibility check &rarr;</a></p>' +
            '<a href="destinations-other.html" class="shrink-0 text-xs font-semibold text-pine-800 hover:text-pine-700">Other Destinations &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<a href="services.html" class="px-3 py-2 text-sm transition-colors ' + linkCls('services.html') + '">Services</a>' +
      '<a href="events.html" class="px-3 py-2 text-sm transition-colors ' + linkCls('events.html') + '">Events</a>' +
      '<a href="success-stories.html" class="px-3 py-2 text-sm transition-colors ' + linkCls('success-stories.html') + '">Success Stories</a>' +
      '<a href="eligibility.html" class="px-3 py-2 text-sm transition-colors ' + linkCls('eligibility.html') + '">Eligibility Check</a>' +
      '<a href="contact.html" class="px-3 py-2 text-sm transition-colors ' + linkCls('contact.html') + '">Contact</a>';

    var mobileDestLinks = destinations.map(function (d) {
      var flag = FLAG_EMOJIS[d.slug] || '🌍';
      return '<a href="' + d.page + '" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ' + (d.page === page ? 'bg-pine-50 text-pine-800 font-semibold' : 'text-pine-950/70 hover:bg-pine-50') + '">' +
        '<span class="text-lg shrink-0">' + flag + '</span>' +
        '<span>' + d.name + '</span>' +
      '</a>';
    }).join('');

    el.className = 'sticky top-0 z-50';
    el.innerHTML =
      '<header class="bg-cream/90 backdrop-blur-md border-b border-pine-950/10">' +
        '<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">' +
          '<div class="flex h-18 items-center justify-between py-3">' +
            '<a href="index.html" class="flex items-center shrink-0" aria-label="Rivil International — Home">' +
              '<img src="' + LOGO_SRC + '" alt="Rivil International Education Consultants" loading="eager" class="h-11 sm:h-12 w-auto">' +
            '</a>' +
            '<div class="hidden lg:flex items-center gap-1">' + desktopLinks + '</div>' +
            '<div class="hidden lg:flex items-center gap-3">' +
              '<a href="contact.html" class="inline-flex items-center gap-2 rounded-full bg-pine-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pine-700 transition-colors">Free Consultation' +
                '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>' +
              '</a>' +
            '</div>' +
            '<button id="nav-mobile-btn" type="button" aria-expanded="false" aria-label="Open menu" class="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-pine-900 hover:bg-pine-50">' +
              '<svg id="nav-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>' +
              '<svg id="nav-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
            '</button>' +
          '</div>' +
        '</nav>' +
        '<div id="nav-mobile-panel" class="hidden lg:hidden border-t border-pine-950/10 bg-cream px-4 pb-6 pt-3 max-h-[calc(100vh-5rem)] overflow-y-auto">' +
          '<a href="index.html" class="block rounded-lg px-3 py-2.5 text-base ' + mobileLinkCls('index.html') + '">Home</a>' +
          '<a href="about.html" class="block rounded-lg px-3 py-2.5 text-base ' + mobileLinkCls('about.html') + '">About</a>' +
          '<button id="nav-mobile-dd-btn" type="button" aria-expanded="false" class="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium ' + (onDestPage ? 'text-pine-800 font-semibold' : 'text-pine-950/80') + ' hover:bg-pine-50">' +
            'Study Destinations' +
            '<svg id="nav-mobile-dd-chevron" class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>' +
          '</button>' +
          '<div id="nav-mobile-dd-panel" class="hidden ml-3 border-l-2 border-gold-400/60 pl-2 my-1">' + mobileDestLinks +
            '<a href="destinations-other.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ' + (page === 'destinations-other.html' ? 'bg-pine-50 text-pine-800 font-semibold' : 'text-pine-950/70 hover:bg-pine-50') + '">' +
              '<span class="text-lg shrink-0">🌍</span>' +
              '<span>Other Destinations</span>' +
            '</a>' +
          '</div>' +
          '<a href="services.html" class="block rounded-lg px-3 py-2.5 text-base ' + mobileLinkCls('services.html') + '">Services</a>' +
          '<a href="events.html" class="block rounded-lg px-3 py-2.5 text-base ' + mobileLinkCls('events.html') + '">Events</a>' +
          '<a href="success-stories.html" class="block rounded-lg px-3 py-2.5 text-base ' + mobileLinkCls('success-stories.html') + '">Success Stories</a>' +
          '<a href="eligibility.html" class="block rounded-lg px-3 py-2.5 text-base ' + mobileLinkCls('eligibility.html') + '">Eligibility Check</a>' +
          '<a href="contact.html" class="block rounded-lg px-3 py-2.5 text-base ' + mobileLinkCls('contact.html') + '">Contact</a>' +
          '<a href="contact.html" class="mt-4 flex items-center justify-center gap-2 rounded-full bg-pine-800 px-5 py-3 text-base font-semibold text-white">Free Consultation</a>' +
        '</div>' +
      '</header>';

    /* Desktop dropdown — hover-triggered, 200ms close delay to prevent accidental dismissal */
    var ddWrap = document.getElementById('nav-dd-wrap');
    var ddBtn = document.getElementById('nav-dd-btn');
    var ddPanel = document.getElementById('nav-dd-panel');
    var ddChevron = document.getElementById('nav-dd-chevron');
    var ddTimer;

    function openDropdown() {
      ddPanel.classList.remove('hidden');
      ddBtn.setAttribute('aria-expanded', 'true');
      ddChevron.classList.add('rotate-180');
    }

    function closeDropdown() {
      ddPanel.classList.add('hidden');
      ddBtn.setAttribute('aria-expanded', 'false');
      ddChevron.classList.remove('rotate-180');
    }

    ddWrap.addEventListener('mouseenter', function () {
      clearTimeout(ddTimer);
      openDropdown();
    });

    ddWrap.addEventListener('mouseleave', function () {
      clearTimeout(ddTimer);
      ddTimer = setTimeout(closeDropdown, 200);
    });

    /* Button click also toggles for keyboard / touch-desktop fallback */
    ddBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = !ddPanel.classList.contains('hidden');
      if (isOpen) closeDropdown();
      else openDropdown();
    });

    document.addEventListener('click', function (e) {
      if (!ddPanel.classList.contains('hidden') && !ddWrap.contains(e.target)) {
        closeDropdown();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });

    /* Mobile menu */
    var mBtn = document.getElementById('nav-mobile-btn');
    var mPanel = document.getElementById('nav-mobile-panel');
    var iconOpen = document.getElementById('nav-icon-open');
    var iconClose = document.getElementById('nav-icon-close');

    mBtn.addEventListener('click', function () {
      var isOpen = !mPanel.classList.contains('hidden');
      mPanel.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
      mBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    /* Mobile destinations accordion — click-toggled */
    var mDdBtn = document.getElementById('nav-mobile-dd-btn');
    var mDdPanel = document.getElementById('nav-mobile-dd-panel');
    var mDdChevron = document.getElementById('nav-mobile-dd-chevron');

    mDdBtn.addEventListener('click', function () {
      var isOpen = !mDdPanel.classList.contains('hidden');
      mDdPanel.classList.toggle('hidden');
      mDdChevron.classList.toggle('rotate-180');
      mDdBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  };

  /* ---------- Footer ---------- */

  window.initFooter = function () {
    var el = document.getElementById('footer');
    if (!el) return;

    var destinations = window.RIVIL_DATA.destinations;
    var year = new Date().getFullYear();

    var socialIcons = SOCIALS.map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + s.name + '" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream/80 hover:bg-gold-400 hover:text-pine-950 transition-colors">' + svgIcon(s.icon, 'w-4.5 h-4.5 w-[18px] h-[18px]') + '</a>';
    }).join('');

    var destLinks = destinations.map(function (d) {
      return '<li><a href="' + d.page + '" class="text-cream/65 hover:text-gold-400 transition-colors">Study in ' + d.name + '</a></li>';
    }).join('');

    el.innerHTML =
      '<footer class="bg-pine-950 text-cream">' +
        '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">' +
          '<div class="grid gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-12">' +

            '<div class="lg:col-span-4">' +
              '<img src="' + LOGO_SRC + '" alt="Rivil International Education Consultants" loading="lazy" class="h-12 w-auto brightness-0 invert opacity-90">' +
              '<p class="mt-5 text-sm leading-relaxed text-cream/65 max-w-sm">Helping Sri Lankan students gain admission to universities abroad since 2004. Our guidance is completely free — no fees, no commissions, no hidden costs.</p>' +
              '<div class="mt-6 flex items-center gap-2.5">' + socialIcons + '</div>' +
            '</div>' +

            '<div class="lg:col-span-2 lg:col-start-6">' +
              '<h3 class="text-sm font-semibold uppercase tracking-wider text-gold-400">Explore</h3>' +
              '<ul class="mt-4 space-y-2.5 text-sm">' +
                '<li><a href="about.html" class="text-cream/65 hover:text-gold-400 transition-colors">About Us</a></li>' +
                '<li><a href="how-it-works.html" class="text-cream/65 hover:text-gold-400 transition-colors">How It Works</a></li>' +
                '<li><a href="success-stories.html" class="text-cream/65 hover:text-gold-400 transition-colors">Success Stories</a></li>' +
                '<li><a href="events.html" class="text-cream/65 hover:text-gold-400 transition-colors">Events</a></li>' +
                '<li><a href="contact.html" class="text-cream/65 hover:text-gold-400 transition-colors">Contact</a></li>' +
              '</ul>' +
            '</div>' +

            '<div class="lg:col-span-2">' +
              '<h3 class="text-sm font-semibold uppercase tracking-wider text-gold-400">Destinations</h3>' +
              '<ul class="mt-4 space-y-2.5 text-sm">' + destLinks + '</ul>' +
            '</div>' +

            '<div class="lg:col-span-3">' +
              '<h3 class="text-sm font-semibold uppercase tracking-wider text-gold-400">Visit Us</h3>' +
              '<ul class="mt-4 space-y-3.5 text-sm text-cream/65">' +
                '<li class="flex gap-3"><svg class="w-5 h-5 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span>' + ADDRESS + '</span></li>' +
                '<li class="flex gap-3"><svg class="w-5 h-5 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><a href="tel:' + PHONE_TEL + '" class="hover:text-gold-400 transition-colors">' + PHONE_DISPLAY + '</a></li>' +
                '<li class="flex gap-3"><svg class="w-5 h-5 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:' + EMAIL + '" class="hover:text-gold-400 transition-colors">' + EMAIL + '</a></li>' +
                '<li class="flex gap-3"><svg class="w-5 h-5 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 24 24"><path d="' + WHATSAPP_ICON + '"/></svg><a href="' + waLink('Hi, I would like to know more about studying abroad. Please contact me.') + '" target="_blank" rel="noopener noreferrer" class="hover:text-gold-400 transition-colors">WhatsApp Us</a></li>' +
              '</ul>' +
            '</div>' +

          '</div>' +
          '<div class="mt-14 border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">' +
            '<p>&copy; ' + year + ' Rivil International Education Consultants. All rights reserved.</p>' +
            '<div class="flex items-center gap-5">' +
              '<a href="privacy-policy.html" class="hover:text-gold-400 transition-colors">Privacy Policy</a>' +
              '<a href="terms-of-service.html" class="hover:text-gold-400 transition-colors">Terms of Service</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>';
  };

  /* ---------- Floating WhatsApp button ---------- */

  window.initWhatsApp = function (message) {
    var msg = message || 'Hi, I would like to know more about studying abroad. Please contact me.';
    var wrap = document.createElement('div');
    wrap.className = 'fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50';
    wrap.innerHTML =
      '<a href="' + waLink(msg) + '" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" class="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center">' +
        '<span class="wa-pulse-ring absolute inset-0 rounded-full bg-[#25D366]"></span>' +
        '<span class="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 transition-transform duration-200 group-hover:scale-110">' +
          svgIcon(WHATSAPP_ICON, 'w-7 h-7 sm:w-8 sm:h-8') +
        '</span>' +
        '<span class="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:block whitespace-nowrap rounded-full bg-pine-950 px-4 py-2 text-xs font-semibold text-white opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">Chat with a counsellor</span>' +
      '</a>';
    document.body.appendChild(wrap);

    /* Tooltip bubble — appears after 8s, auto-dismisses after 5s, clickable */
    var bubble = document.createElement('a');
    bubble.href = waLink(msg);
    bubble.target = '_blank';
    bubble.rel = 'noopener noreferrer';
    bubble.className = 'absolute bottom-1 right-full mr-4 w-max max-w-[220px] whitespace-nowrap rounded-xl bg-pine-900 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-pine-950/25 opacity-0 translate-y-1 transition-all duration-300 pointer-events-none';
    bubble.textContent = '👋 Have a question? Chat with us!';
    /* Small arrow pointing right toward the button */
    var arrow = document.createElement('span');
    arrow.className = 'absolute top-1/2 left-full -translate-y-1/2 -ml-px border-y-[6px] border-l-[7px] border-y-transparent border-l-pine-900';
    bubble.appendChild(arrow);
    wrap.appendChild(bubble);

    var hideTimer;
    function showBubble() {
      bubble.classList.remove('opacity-0', 'translate-y-1', 'pointer-events-none');
      hideTimer = setTimeout(hideBubble, 5000);
    }
    function hideBubble() {
      clearTimeout(hideTimer);
      bubble.classList.add('opacity-0', 'translate-y-1', 'pointer-events-none');
    }
    setTimeout(showBubble, 8000);
  };

  /* ---------- Side pop-up alert ---------- */
  /* Fixed panel on the right edge, vertically centred. Slides in 3s after load,
     toggled by a leftward tab, and dismissed permanently for the session via X. */

  window.initSideAlert = function () {
    var DISMISS_KEY = 'rivil_side_alert_dismissed';
    var events = (window.RIVIL_DATA && window.RIVIL_DATA.events) || [];
    var ev = events[0];
    if (!ev) return;

    var dismissed = false;
    try { dismissed = sessionStorage.getItem(DISMISS_KEY) === '1'; } catch (e) {}
    if (dismissed) return;

    var CLOSED = 'translateY(-50%) translateX(100%)';
    var OPEN = 'translateY(-50%) translateX(0)';

    var panel = document.createElement('div');
    panel.id = 'side-alert';
    panel.setAttribute('role', 'complementary');
    panel.setAttribute('aria-label', 'Upcoming event alert');
    panel.className = 'fixed right-0 z-40 w-[240px] sm:w-[280px] transition-transform duration-500 ease-out';
    panel.style.top = '50%';
    panel.style.transform = CLOSED;

    var registerHref = ev.register_link || '#';

    panel.innerHTML =
      '<button type="button" id="side-alert-tab" aria-label="Toggle event alert" class="absolute right-full top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-l-xl bg-gold-400 px-2.5 py-4 text-pine-950 shadow-lg shadow-pine-950/20 hover:bg-gold-300 transition-colors" style="writing-mode:vertical-rl">' +
        '<span class="text-base leading-none">🔔</span>' +
        '<span class="text-[11px] font-bold uppercase tracking-wider rotate-180">Event</span>' +
      '</button>' +
      '<div class="relative rounded-l-2xl bg-pine-900 p-5 pr-6 text-cream shadow-xl shadow-pine-950/30 ring-1 ring-white/10">' +
        '<button type="button" id="side-alert-close" aria-label="Dismiss alert" class="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-cream/60 hover:bg-white/10 hover:text-white transition-colors">' +
          '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
        '</button>' +
        '<p class="text-[11px] font-bold uppercase tracking-wider text-gold-400">🔔 Upcoming Event</p>' +
        '<h3 class="mt-2 font-display text-base font-bold leading-snug text-white">' + ev.title + '</h3>' +
        '<ul class="mt-3 space-y-2 text-xs text-cream/75">' +
          '<li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span>' + ev.date + '</span></li>' +
          '<li class="flex items-start gap-2"><svg class="w-4 h-4 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span>' + ev.location + '</span></li>' +
        '</ul>' +
        '<a href="' + registerHref + '" target="_blank" rel="noopener noreferrer" class="mt-4 block w-full rounded-full bg-gold-400 px-4 py-2.5 text-center text-xs font-bold text-pine-950 hover:bg-gold-300 transition-colors">Register Now →</a>' +
      '</div>';

    document.body.appendChild(panel);

    var isOpen = false;
    function open() { isOpen = true; panel.style.transform = OPEN; }
    function close() { isOpen = false; panel.style.transform = CLOSED; }

    document.getElementById('side-alert-tab').addEventListener('click', function () {
      if (isOpen) close(); else open();
    });

    document.getElementById('side-alert-close').addEventListener('click', function () {
      close();
      try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch (e) {}
    });

    /* Slide in after a short delay on first load */
    setTimeout(open, 3000);
  };

  /* ---------- Animated stats counter ---------- */

  window.initStatsCounter = function () {
    var els = document.querySelectorAll('[data-target]');
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.textContent = el.getAttribute('data-target') + (el.getAttribute('data-suffix') || ''); });
      return;
    }

    function animate(el) {
      var target = parseInt(el.getAttribute('data-target'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1800;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        var value = Math.round(eased * target);
        el.textContent = value.toLocaleString('en-GB') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    els.forEach(function (el) { observer.observe(el); });
  };

  /* ---------- Scroll reveal animations ---------- */

  window.initScrollAnimations = function () {
    var els = document.querySelectorAll('.scroll-reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  };

  /* ---------- Destination cards ---------- */

  window.renderDestinationCards = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = window.RIVIL_DATA.destinations.map(function (d, i) {
      return '<a href="' + d.page + '" class="scroll-reveal group relative block overflow-hidden rounded-3xl bg-pine-950 shadow-md shadow-pine-950/10 hover:shadow-xl hover:shadow-pine-950/20 transition-shadow duration-300" style="transition-delay:' + (i % 3) * 90 + 'ms">' +
        '<div class="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">' +
          '<img src="' + DEST_IMAGES[d.slug] + '" alt="Study in ' + d.name + '" loading="lazy" class="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110">' +
        '</div>' +
        '<div class="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/35 to-transparent"></div>' +
        '<div class="absolute inset-x-0 bottom-0 p-6 sm:p-7">' +
          '<p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">' + d.universities.length + ' institutions</p>' +
          '<h3 class="mt-1.5 font-display text-2xl sm:text-[1.7rem] font-semibold text-white">' + d.name + '</h3>' +
          '<p class="mt-2 text-sm leading-snug text-cream/75 line-clamp-2">' + d.tagline + '</p>' +
          '<span class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">Explore destination' +
            '<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>' +
          '</span>' +
        '</div>' +
      '</a>';
    }).join('');

    window.initScrollAnimations();
  };

  /* ---------- University cards ---------- */

  window.renderUniversityCards = function (containerId, slug) {
    var container = document.getElementById(containerId);
    var dest = getDestination(slug);
    if (!container || !dest) return;

    var logos = (window.RIVIL_DATA && window.RIVIL_DATA.universityLogos) || {};

    container.innerHTML = dest.universities.map(function (u, i) {
      var enquiry = 'Hi, I am interested in ' + u.name + ' (' + dest.name + '). Please contact me.';
      var rankingBadge = u.ranking
        ? '<span class="inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-700"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.32L10 13.2l-4.78 2.51.91-5.32-3.86-3.77 5.34-.78L10 1z"/></svg>' + u.ranking + '</span>'
        : '';

      var chips = u.programmes.map(function (p) {
        return '<span class="rounded-full bg-pine-50 px-3 py-1 text-xs font-medium text-pine-800 ring-1 ring-pine-950/5">' + p + '</span>';
      }).join('');

      /* Logo placeholder — 120x60 pine-50 box. Initials show through until the
         real logo (added manually under assets/logos/) loads over them. */
      var logoSrc = logos[u.name] || '';
      var logoBox = '<div class="relative mb-5 flex h-[60px] w-[120px] items-center justify-center overflow-hidden rounded-lg bg-pine-50 ring-1 ring-pine-950/5">' +
        '<span class="select-none text-[11px] font-bold uppercase tracking-wide text-pine-800/55">' + initials(u.name) + '</span>' +
        '<img src="' + logoSrc + '" alt="' + u.name + ' logo" loading="lazy" class="absolute inset-0 m-auto max-h-[44px] max-w-[104px] bg-pine-50 object-contain" onerror="this.style.display=\'none\'">' +
      '</div>';

      return '<article class="scroll-reveal flex flex-col rounded-2xl bg-white p-6 sm:p-7 shadow-sm shadow-pine-950/5 ring-1 ring-pine-950/5 hover:shadow-lg hover:shadow-pine-950/10 hover:-translate-y-1 transition-all duration-300" style="transition-delay:' + (i % 3) * 80 + 'ms">' +
        logoBox +
        '<div class="flex items-start justify-between gap-3">' +
          '<div>' +
            '<h3 class="font-display text-xl font-semibold text-pine-950 leading-tight">' + u.name + '</h3>' +
            '<p class="mt-1.5 flex items-center gap-1.5 text-sm text-pine-950/55">' +
              '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' +
              u.city +
            '</p>' +
          '</div>' +
        '</div>' +
        (rankingBadge ? '<div class="mt-3">' + rankingBadge + '</div>' : '') +
        '<div class="mt-4 flex flex-wrap gap-2">' + chips + '</div>' +
        '<div class="mt-auto pt-6 flex flex-col sm:flex-row gap-3">' +
          '<a href="' + u.website + '" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-pine-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-pine-700 transition-colors">Visit Website' +
            '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>' +
          '</a>' +
          '<a href="' + waLink(enquiry) + '" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#25D366]/60 px-4 py-2.5 text-sm font-semibold text-pine-950 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-colors">' +
            svgIcon(WHATSAPP_ICON, 'w-4 h-4') + 'Enquire on WhatsApp' +
          '</a>' +
        '</div>' +
      '</article>';
    }).join('');

    window.initScrollAnimations();
  };

  /* ---------- Country stat cards ---------- */

  window.renderCountryStats = function (containerId, slug) {
    var container = document.getElementById(containerId);
    var stats = (window.RIVIL_DATA.countryStats || {})[slug];
    if (!container || !stats) return;

    var cards = [
      { label: 'Population', value: stats.population, icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a3 3 0 11-3-3' },
      { label: 'Currency', value: stats.currency, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Avg Tuition', value: stats.avgTuition, icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
      { label: 'Post-Study Visa', value: stats.postStudyVisa, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
    ];

    container.innerHTML = cards.map(function (c, i) {
      return '<div class="scroll-reveal rounded-2xl bg-white p-6 text-center shadow-sm shadow-pine-950/5 ring-1 ring-pine-950/5" style="transition-delay:' + (i % 4) * 70 + 'ms">' +
        '<span class="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-pine-50 text-pine-700">' +
          '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="' + c.icon + '"/></svg>' +
        '</span>' +
        '<p class="mt-4 font-display text-lg font-semibold leading-snug text-pine-950">' + (c.value || '&mdash;') + '</p>' +
        '<p class="mt-1 text-xs font-semibold uppercase tracking-wider text-pine-950/50">' + c.label + '</p>' +
      '</div>';
    }).join('');

    window.initScrollAnimations();
  };

  /* ---------- Country map section ---------- */

  window.renderCountryMap = function (containerId, slug) {
    var container = document.getElementById(containerId);
    var dest = getDestination(slug);
    var stats = (window.RIVIL_DATA.countryStats || {})[slug];
    if (!container || !dest || !stats) return;

    var mapImage = stats.mapImage
      ? '<img src="' + stats.mapImage + '" alt="Map of ' + dest.name + '" loading="lazy" class="h-full w-full object-cover" onerror="this.style.display=\'none\';this.parentNode.classList.add(\'map-fallback\')">'
      : '';
    var mapFallbackCls = stats.mapImage ? '' : ' map-fallback';

    var facts = [
      { label: 'Capital', value: stats.capital, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
      { label: 'Climate', value: stats.climate, icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
      { label: 'Currency', value: stats.currency, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Post-Study Visa', value: stats.postStudyVisa, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
    ];

    var factRows = facts.map(function (f) {
      return '<li class="flex items-start gap-4 border-b border-pine-950/8 pb-5 last:border-0 last:pb-0">' +
        '<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pine-800 text-gold-400">' +
          '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="' + f.icon + '"/></svg>' +
        '</span>' +
        '<span>' +
          '<span class="block text-xs font-semibold uppercase tracking-wider text-pine-950/45">' + f.label + '</span>' +
          '<span class="mt-0.5 block text-base font-semibold text-pine-950">' + (f.value || '&mdash;') + '</span>' +
        '</span>' +
      '</li>';
    }).join('');

    container.innerHTML =
      '<div class="grid items-stretch gap-8 lg:grid-cols-2">' +
        '<div class="scroll-reveal relative min-h-[320px] overflow-hidden rounded-3xl bg-pine-100' + mapFallbackCls + '">' + mapImage +
          '<span class="map-fallback-label pointer-events-none absolute inset-0 hidden items-center justify-center text-sm font-semibold text-pine-800/60">Map coming soon</span>' +
        '</div>' +
        '<div class="scroll-reveal flex flex-col justify-center">' +
          '<p class="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">Country at a glance</p>' +
          '<h2 class="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">Key facts about ' + dest.name + '</h2>' +
          '<ul class="mt-8 space-y-5">' + factRows + '</ul>' +
        '</div>' +
      '</div>';

    window.initScrollAnimations();
  };

  /* ---------- Testimonial cards ---------- */

  window.renderTestimonialCards = function (containerId, limit) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var items = window.RIVIL_DATA.testimonials;
    if (limit) items = items.slice(0, limit);

    container.innerHTML = items.map(function (t, i) {
      return '<figure class="scroll-reveal flex flex-col rounded-3xl bg-white p-7 sm:p-8 shadow-sm shadow-pine-950/5 ring-1 ring-pine-950/5" style="transition-delay:' + (i % 3) * 90 + 'ms">' +
        '<svg class="w-9 h-9 text-gold-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>' +
        '<blockquote class="mt-5 flex-1 text-[15px] leading-relaxed text-pine-950/75">&ldquo;' + t.quote + '&rdquo;</blockquote>' +
        '<figcaption class="mt-7 flex items-center gap-4 border-t border-pine-950/8 border-pine-950/10 pt-5">' +
          '<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine-800 font-display text-base font-semibold text-gold-400">' + initials(t.name) + '</span>' +
          '<div>' +
            '<p class="text-sm font-semibold text-pine-950">' + t.name + '</p>' +
            '<p class="mt-0.5 text-xs text-pine-950/55">' + t.destination + ' &middot; ' + t.date + '</p>' +
          '</div>' +
        '</figcaption>' +
      '</figure>';
    }).join('');

    window.initScrollAnimations();
  };

  /* ---------- Event cards ---------- */

  window.renderEventCards = function (containerId, filter) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    function parseEventDate(dateStr) {
      var cleaned = dateStr
        .replace(/(\d+)(st|nd|rd|th)/gi, '$1')
        .replace(/^[A-Za-z]+,\s*/, '');
      return new Date(cleaned);
    }

    function destSlugFromName(name) {
      var list = (window.RIVIL_DATA && window.RIVIL_DATA.destinations) || [];
      for (var i = 0; i < list.length; i++) {
        if (list[i].name === name) return list[i].slug;
      }
      return name.toLowerCase().replace(/\s+/g, '-');
    }

    function buildCalendarUrl(ev) {
      var date = parseEventDate(ev.date);
      if (isNaN(date.getTime())) return '#';

      var timeParts = ev.time.split(/\s+to\s+/i);

      function parseTimePart(str) {
        var m = (str || '').trim().match(/^(\d+)(?::(\d+))?\s*(am|pm)$/i);
        if (!m) return null;
        var h = parseInt(m[1], 10), min = parseInt(m[2] || '0', 10);
        if (/pm/i.test(m[3]) && h !== 12) h += 12;
        if (/am/i.test(m[3]) && h === 12) h = 0;
        return { h: h, min: min };
      }

      var st = parseTimePart(timeParts[0]);
      var et = parseTimePart(timeParts[1]);
      if (!st || !et) return '#';

      function pad2(n) { return n < 10 ? '0' + n : '' + n; }
      function fmtDT(d, t) {
        return d.getFullYear() + '' + pad2(d.getMonth() + 1) + '' + pad2(d.getDate()) +
          'T' + pad2(t.h) + '' + pad2(t.min) + '00';
      }

      return 'https://www.google.com/calendar/render?action=TEMPLATE' +
        '&text=' + encodeURIComponent(ev.title) +
        '&dates=' + fmtDT(date, st) + '/' + fmtDT(date, et) +
        '&details=' + encodeURIComponent('Rivil International — ' + ev.title) +
        '&location=' + encodeURIComponent(ev.location);
    }

    var events = window.RIVIL_DATA.events;
    var filtered;

    if (filter === 'upcoming') {
      filtered = events.filter(function (ev) { return parseEventDate(ev.date) >= today; });
      filtered.sort(function (a, b) { return parseEventDate(a.date) - parseEventDate(b.date); });
    } else if (filter === 'past') {
      filtered = events.filter(function (ev) { return parseEventDate(ev.date) < today; });
      filtered.sort(function (a, b) { return parseEventDate(b.date) - parseEventDate(a.date); });
    } else {
      filtered = events;
    }

    if (!filtered.length) {
      var emptyMsg = filter === 'past'
        ? 'No past events to show.'
        : 'No upcoming events at the moment. Follow us on social media for announcements.';
      container.innerHTML = '<p class="text-center text-pine-950/60 col-span-full py-8">' + emptyMsg + '</p>';
      return;
    }

    container.innerHTML = filtered.map(function (ev, i) {
      var slug = destSlugFromName(ev.destination);
      var isPast = parseEventDate(ev.date) < today;
      var imgSrc = DEST_IMAGES[slug] || '';
      var flag = FLAG_EMOJIS[slug] || '🌍';
      var calUrl = buildCalendarUrl(ev);

      var badgeText = isPast ? 'PAST EVENT' : 'UPCOMING EVENT';
      var badgeCls = isPast ? 'bg-pine-950/70 text-white' : 'bg-gold-400 text-pine-950';
      var imgCls = isPast ? ' grayscale' : '';

      var ctaHtml = isPast
        ? '<a href="#" class="block w-full text-center rounded-full border-2 border-pine-800 px-6 py-3 text-sm font-semibold text-pine-800 hover:bg-pine-800 hover:text-white transition-colors">View Summary</a>'
        : '<a href="' + (ev.register_link || '#') + '" target="_blank" rel="noopener noreferrer" class="block w-full text-center rounded-full bg-pine-800 px-6 py-3 text-sm font-semibold text-white hover:bg-pine-700 transition-colors">Register Now →</a>' +
          '<a href="' + calUrl + '" target="_blank" rel="noopener noreferrer" class="mt-3 block text-center text-sm font-medium text-pine-700 hover:text-pine-500 hover:underline underline-offset-2 transition-colors">Add to Calendar</a>';

      return '<article class="scroll-reveal flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm shadow-pine-950/5 ring-1 ring-pine-950/5 hover:shadow-lg hover:shadow-pine-950/10 transition-shadow duration-300" style="transition-delay:' + (i % 2) * 100 + 'ms">' +

        '<div class="relative aspect-[16/9] overflow-hidden">' +
          '<img src="' + imgSrc + '" alt="Study in ' + ev.destination + '" loading="lazy" class="h-full w-full object-cover transition-transform duration-700' + imgCls + '">' +
          '<div class="absolute inset-0 bg-gradient-to-t from-pine-950/40 to-transparent"></div>' +
          '<span class="absolute top-4 left-4 rounded-full ' + badgeCls + ' px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider">' + badgeText + '</span>' +
        '</div>' +

        '<div class="flex flex-1 flex-col p-6 sm:p-7">' +
          '<p class="flex items-center gap-2 text-sm font-medium text-pine-950/55">' +
            '<span class="text-base">' + flag + '</span>' + ev.destination +
          '</p>' +
          '<h3 class="mt-2 font-display text-xl sm:text-[1.4rem] font-bold text-pine-950 leading-snug">' + ev.title + '</h3>' +
          '<ul class="mt-4 space-y-2.5 text-sm text-pine-950/70">' +
            '<li class="flex items-center gap-3"><svg class="w-[18px] h-[18px] shrink-0 text-pine-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' + ev.date + '</li>' +
            '<li class="flex items-center gap-3"><svg class="w-[18px] h-[18px] shrink-0 text-pine-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' + ev.time + '</li>' +
            '<li class="flex items-center gap-3"><svg class="w-[18px] h-[18px] shrink-0 text-pine-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' + ev.location + '</li>' +
          '</ul>' +
          '<div class="mt-auto pt-6">' + ctaHtml + '</div>' +
        '</div>' +

      '</article>';
    }).join('');

    window.initScrollAnimations();
  };

  /* ---------- Destination page initialiser ---------- */
  /* Fills the standard destination-page shell (hero, why-study, universities,
     CTA) entirely from RIVIL_DATA so nothing is hardcoded in the HTML. */

  window.initDestinationPage = function (slug) {
    var dest = getDestination(slug);
    if (!dest) return;

    var set = function (id, text) {
      var node = document.getElementById(id);
      if (node) node.textContent = text;
    };

    set('dest-name', dest.name);
    set('dest-tagline', dest.tagline);
    set('dest-overview', dest.overview);
    set('dest-name-inline', dest.name);
    set('dest-name-inline-2', dest.name);
    set('dest-flag', FLAG_EMOJIS[dest.slug] || '🌍');
    set('uni-count', dest.universities.length);

    var heroImg = document.getElementById('dest-hero-img');
    if (heroImg) {
      heroImg.src = HERO_IMAGES[dest.slug] || DEST_IMAGES[dest.slug];
      heroImg.alt = dest.name + ' landscape';
    }

    renderCountryStats('stats-grid', dest.slug);
    renderCountryMap('country-map', dest.slug);

    /* Why study grid */
    var whyIcons = [
      'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    ];

    var whyGrid = document.getElementById('why-grid');
    if (whyGrid) {
      whyGrid.innerHTML = dest.why_study.map(function (reason, i) {
        return '<div class="scroll-reveal flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm shadow-pine-950/5 ring-1 ring-pine-950/5" style="transition-delay:' + (i % 2) * 90 + 'ms">' +
          '<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine-800 text-gold-400">' +
            '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="' + whyIcons[i % whyIcons.length] + '"/></svg>' +
          '</span>' +
          '<p class="pt-2 text-[15px] font-medium leading-relaxed text-pine-950/85">' + reason + '</p>' +
        '</div>';
      }).join('');
    }

    window.renderUniversityCards('universities-grid', slug);

    /* Wire the WhatsApp CTA links on the page */
    document.querySelectorAll('[data-wa-cta]').forEach(function (a) {
      a.href = waLink(dest.whatsapp_message);
    });

    window.initWhatsApp(dest.whatsapp_message);
    window.initScrollAnimations();
  };

  /* ---------- Contact form (no backend) ---------- */

  window.initContactForm = function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    /* Populate the destination dropdown from RIVIL_DATA */
    var select = document.getElementById('contact-destination');
    if (select) {
      window.RIVIL_DATA.destinations.forEach(function (d) {
        var opt = document.createElement('option');
        opt.value = d.name;
        opt.textContent = d.name;
        select.appendChild(opt);
      });
      var unsure = document.createElement('option');
      unsure.value = 'Not sure yet';
      unsure.textContent = 'Not sure yet';
      select.appendChild(unsure);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('contact-name').value || '').trim();
      var success = document.getElementById('contact-success');
      var firstName = name.split(' ')[0] || 'there';
      var nameSpan = document.getElementById('success-name');
      if (nameSpan) nameSpan.textContent = firstName;
      form.classList.add('hidden');
      if (success) {
        success.classList.remove('hidden');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    var resetBtn = document.getElementById('contact-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        form.classList.remove('hidden');
        document.getElementById('contact-success').classList.add('hidden');
      });
    }
  };

  /* Expose a couple of helpers for inline page scripts */
  window.RIVIL = {
    waLink: waLink,
    PHONE_DISPLAY: PHONE_DISPLAY,
    EMAIL: EMAIL,
    ADDRESS: ADDRESS
  };
})();
