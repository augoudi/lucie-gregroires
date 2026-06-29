(function () {
  const CONFIG = {
    weddingDate: new Date("2026-08-01T08:00:00+01:00"),
    storageKey: "lg-lucie-gregoire-rsvps",
    dashPassword: "lucie2026",
    whatsapp: "237600000000",
    emails: ["augoudi@gmail.com", "Gregoires2580@gmail.com"],
    heroPhoto: "pics/4S9A3896.jpg.jpeg",
    photos: [
      "pics/4S9A3822.jpg.jpeg",
      "pics/4S9A3876.jpg.jpeg",
      "pics/4S9A3885.jpg.jpeg",
      "pics/4S9A3891.jpg.jpeg",
      "pics/4S9A3896.jpg.jpeg",
      "pics/4S9A3898.jpg.jpeg",
      "pics/4S9A3903.jpg.jpeg",
      "pics/WhatsApp Image 2026-06-28 at 16.02.46.jpeg",
      "pics/WhatsApp Image 2026-06-28 at 16.03.09 (1).jpeg",
      "pics/WhatsApp Image 2026-06-28 at 16.03.11.jpeg",
    ],
  };

  const i18n = {
    fr: {
      "nav.home": "Accueil", "nav.program": "Programme", "nav.story": "Galerie", "nav.rsvp": "RSVP", "nav.souvenir": "Cadre Souvenir", "nav.dashboard": "Admin",
      "hero.blessing": "Avec la bénédiction de leurs familles",
      "hero.families": "Allah Lame Lucien & Kitikil Joseph",
      "hero.invite": "Ont l'immense joie de vous inviter à célébrer leur union sacramentelle, le Samedi 01 Août 2026 à Maroua, Extrême-Nord — Cameroun.",
      "hero.cta": "Confirmer ma présence", "hero.scroll": "Défiler",
      "cd.days": "Jours", "cd.hours": "Heures", "cd.mins": "Minutes", "cd.secs": "Secondes",
      "prog.dateLabel": "Date", "prog.dateDay": "01 AOÛT", "prog.dateYear": "2026",
      "evt.civil.title": "Cérémonie Civile", "evt.civil.place": "Cercle municipal de Maroua",
      "evt.religious.title": "Cérémonie Religieuse", "evt.religious.place": "Paroisse Saint Jean de Djarengol",
      "evt.vin.title": "Vin d'Honneur", "evt.vin.place": "Quartier Zokok-Laddeo", "evt.vin.note": "Offert par la famille de la mariée",
      "evt.reception.title": "Réception", "evt.reception.place": "Salle de fête de l'Hôtel Shalom", "evt.reception.note": "Offerte par le couple",
      "punct.title": "Mot sur la ponctualité",
      "punct.body": "Par respect pour les mariés et l'ensemble des invités, nous vous prions de respecter scrupuleusement les horaires indiqués. Les cérémonies débuteront à l'heure précise. Votre ponctualité est le plus beau cadeau que vous puissiez leur offrir ce jour-là.",
      "punct.sign": "— Lucie & Grégroires",
      "story.title": "Nos Souvenirs", "story.sub": "Lucie & Grégroires",
      "quote.text": "Parce que chaque grande histoire mérite ses témoins… venez écrire avec nous le premier chapitre de notre éternité.",
      "rsvp.title": "Confirmez votre présence", "rsvp.intro": "Votre présence sera notre plus beau cadeau. Merci de répondre avant le",
      "rsvp.deadline": "15 Juillet 2026",
      "rsvp.first": "Prénom", "rsvp.last": "Nom", "rsvp.phone": "Téléphone",
      "rsvp.attend": "Serez-vous des nôtres ?", "rsvp.yes": "Je serai présent(e)", "rsvp.no": "Je ne pourrai pas venir",
      "rsvp.guests": "Nombre de personnes", "rsvp.message": "Message pour les mariés",
      "rsvp.submit": "Envoyer ma confirmation", "rsvp.or": "OU", "rsvp.whatsapp": "Confirmer via WhatsApp",
      "rsvp.success.title": "Merci !",
      "rsvp.success.text": "Votre réponse a bien été transmise à Lucie & Grégroires. Ils vous attendent avec impatience le 01 Août 2026.",
      "rsvp.error": "Une erreur est survenue. Veuillez réessayer.",
      "dash.netlify": "Les réponses complètes sont également disponibles sur",
      "dash.lock": "Accès réservé aux mariés", "dash.placeholder": "Mot de passe", "dash.unlock": "Accéder", "dash.error": "Mot de passe incorrect",
      "dash.total": "Réponses", "dash.yes": "Présents", "dash.no": "Absents", "dash.guests": "Personnes",
      "dash.col.name": "Nom", "dash.col.phone": "Téléphone", "dash.col.attend": "Présence", "dash.col.nb": "Nb", "dash.col.msg": "Message", "dash.col.date": "Date",
      "dash.export": "Exporter CSV",
      "footer.dress": "Tenue & Billet Exigés", "footer.meta": "01 Août 2026 · Maroua, Cameroun",
      "badge.yes": "Présent", "badge.no": "Absent",
      "souvenir.eyebrow": "Un souvenir à garder",
      "souvenir.title": "Votre cadre du 01 Août",
      "souvenir.intro": "Immortalisez ce jour inoubliable. Uploadez votre photo et téléchargez-la avec le cadre officiel du mariage de Lucie & Grégroires.",
      "souvenir.upload": "Choisir ma photo",
      "souvenir.formats": "JPG · PNG · WEBP · Max 10MB",
      "souvenir.download": "⬇ Télécharger mon souvenir",
      "souvenir.reset": "Changer de photo",
      "souvenir.preview": "L'aperçu de votre photo encadrée apparaîtra ici",
    },
    en: {
      "nav.home": "Home", "nav.program": "Schedule", "nav.story": "Gallery", "nav.rsvp": "RSVP", "nav.souvenir": "Photo Frame", "nav.dashboard": "Admin",
      "hero.blessing": "With the blessing of their families",
      "hero.families": "Allah Lame Lucien & Kitikil Joseph",
      "hero.invite": "Have the great joy of inviting you to celebrate their sacramental union on Saturday, August 1, 2026 in Maroua, Far North — Cameroon.",
      "hero.cta": "Confirm attendance", "hero.scroll": "Scroll",
      "cd.days": "Days", "cd.hours": "Hours", "cd.mins": "Minutes", "cd.secs": "Seconds",
      "prog.dateLabel": "Date", "prog.dateDay": "01 AUGUST", "prog.dateYear": "2026",
      "evt.civil.title": "Civil Ceremony", "evt.civil.place": "Maroua Municipal Hall",
      "evt.religious.title": "Religious Ceremony", "evt.religious.place": "Saint John of Djarengol Parish",
      "evt.vin.title": "Cocktail Hour", "evt.vin.place": "Zokok-Laddeo District", "evt.vin.note": "Hosted by the bride's family",
      "evt.reception.title": "Reception", "evt.reception.place": "Hôtel Shalom Banquet Hall", "evt.reception.note": "Hosted by the couple",
      "punct.title": "A note on punctuality",
      "punct.body": "Out of respect for the couple and all guests, we kindly ask you to observe the scheduled times strictly. Ceremonies will begin promptly. Your punctuality is the finest gift you can offer them on this day.",
      "punct.sign": "— Lucie & Grégroires",
      "story.title": "Our Memories", "story.sub": "Lucie & Grégroires",
      "quote.text": "Because every great story deserves its witnesses… come write the first chapter of our eternity with us.",
      "rsvp.title": "Confirm your attendance", "rsvp.intro": "Your presence is our greatest gift. Please respond before",
      "rsvp.deadline": "July 15, 2026",
      "rsvp.first": "First name", "rsvp.last": "Last name", "rsvp.phone": "Phone",
      "rsvp.attend": "Will you join us?", "rsvp.yes": "I will attend", "rsvp.no": "I cannot attend",
      "rsvp.guests": "Number of guests", "rsvp.message": "Message for the couple",
      "rsvp.submit": "Send confirmation", "rsvp.or": "OR", "rsvp.whatsapp": "Confirm via WhatsApp",
      "rsvp.success.title": "Thank you!",
      "rsvp.success.text": "Your response has been sent to Lucie & Grégroires. They look forward to seeing you on August 1, 2026.",
      "rsvp.error": "Something went wrong. Please try again.",
      "dash.netlify": "Full responses are also available on",
      "dash.lock": "Access for the couple only", "dash.placeholder": "Password", "dash.unlock": "Enter", "dash.error": "Incorrect password",
      "dash.total": "Responses", "dash.yes": "Attending", "dash.no": "Declined", "dash.guests": "Guests",
      "dash.col.name": "Name", "dash.col.phone": "Phone", "dash.col.attend": "Status", "dash.col.nb": "Nb", "dash.col.msg": "Message", "dash.col.date": "Date",
      "dash.export": "Export CSV",
      "footer.dress": "Formal Attire & Ticket Required", "footer.meta": "August 1, 2026 · Maroua, Cameroon",
      "badge.yes": "Attending", "badge.no": "Declined",
      "souvenir.eyebrow": "A keepsake to treasure",
      "souvenir.title": "Your August 1st Frame",
      "souvenir.intro": "Capture this unforgettable day. Upload your photo and download it with the official Lucie & Grégroires wedding frame.",
      "souvenir.upload": "Choose my photo",
      "souvenir.formats": "JPG · PNG · WEBP · Max 10MB",
      "souvenir.download": "⬇ Download my keepsake",
      "souvenir.reset": "Change photo",
      "souvenir.preview": "Your framed photo preview will appear here",
    },
  };

  let lang = localStorage.getItem("lg-lang") || "fr";
  let attendance = null;
  let lastScroll = 0;

  function t(key) {
    return (i18n[lang] && i18n[lang][key]) || key;
  }

  function applyLang(l) {
    lang = l;
    localStorage.setItem("lg-lang", l);
    document.documentElement.lang = l;
    document.title = l === "fr" ? "Lucie & Grégroires — Mariage" : "Lucie & Grégroires — Wedding";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.tagName === "A" && el.closest(".dash-netlify-note")) return;
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === l);
    });
    updateWhatsAppLink();
    if (document.getElementById("dashPanel").classList.contains("unlocked")) renderDashboard();
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function updateCountdown() {
    const diff = Math.max(0, CONFIG.weddingDate - Date.now());
    const ids = ["cd-days", "cd-hours", "cd-mins", "cd-secs"];
    const vals = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000),
    ];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      const v = pad(vals[i]);
      if (el.textContent !== v) {
        el.classList.add("tick");
        el.textContent = v;
        setTimeout(() => el.classList.remove("tick"), 300);
      }
    });
  }

  function getRsvps() {
    try {
      return JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    } catch {
      return [];
    }
  }

  function saveRsvps(data) {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
  }

  function photoUrl(path) {
    const parts = path.split("/");
    return parts[0] + "/" + parts.slice(1).map(encodeURIComponent).join("/");
  }

  function updateWhatsAppLink() {
    const msg =
      lang === "fr"
        ? "Bonjour, je confirme ma présence au mariage de Lucie & Grégroires le 01 Août 2026 à Maroua."
        : "Hello, I confirm my attendance at Lucie & Grégroires's wedding on August 1, 2026 in Maroua.";
    document.getElementById("whatsappBtn").href =
      "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg);
  }

  function loadPhotos() {
    const gallery = document.getElementById("photoGallery");
    CONFIG.photos.forEach((src) => {
      const el = document.createElement("img");
      el.src = photoUrl(src);
      el.alt = "Lucie & Grégroires";
      el.loading = "lazy";
      el.onerror = function () {
        this.remove();
      };
      gallery.appendChild(el);
    });
  }

  function esc(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function renderDashboard() {
    const rows = getRsvps();
    let yes = 0;
    let no = 0;
    let guests = 0;
    rows.forEach((r) => {
      if (r.attendance === "yes") {
        yes++;
        guests += parseInt(r.guests || 1, 10);
      } else no++;
    });
    document.getElementById("statTotal").textContent = rows.length;
    document.getElementById("statYes").textContent = yes;
    document.getElementById("statNo").textContent = no;
    document.getElementById("statGuests").textContent = guests;
    document.getElementById("dashTableBody").innerHTML =
      rows
        .map(
          (r) => `<tr>
          <td>${esc(r.firstName)} ${esc(r.lastName)}</td>
          <td>${esc(r.phone)}</td>
          <td><span class="badge ${r.attendance === "yes" ? "badge-yes" : "badge-no"}">${r.attendance === "yes" ? t("badge.yes") : t("badge.no")}</span></td>
          <td>${r.attendance === "yes" ? r.guests || 1 : "—"}</td>
          <td>${esc(r.message || "—")}</td>
          <td>${esc(r.date || "")}</td>
        </tr>`
        )
        .join("") || '<tr><td colspan="6" class="empty-cell">—</td></tr>';
  }

  function exportCsv() {
    const rows = getRsvps();
    const lines = [["Prenom", "Nom", "Telephone", "Presence", "NbPersonnes", "Message", "Date"].join(";")];
    rows.forEach((r) => {
      lines.push(
        [
          r.firstName,
          r.lastName,
          r.phone,
          r.attendance === "yes" ? "Present" : "Absent",
          r.attendance === "yes" ? r.guests || 1 : 0,
          (r.message || "").replace(/;/g, ","),
          r.date,
        ]
          .map((v) => '"' + String(v).replace(/"/g, '""') + '"')
          .join(";")
      );
    });
    const blob = new Blob(["\ufeff" + lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "rsvp-lucie-gregoire.csv";
    a.click();
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  const header = document.getElementById("header");
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y > 80) header.classList.toggle("hidden", y > lastScroll);
      else header.classList.remove("hidden");
      lastScroll = y;
    },
    { passive: true }
  );

  const heroParallax = document.getElementById("heroParallax");
  if (heroParallax) {
    document.querySelector(".hero").addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      heroParallax.style.transform = "translate(" + x + "px," + y + "px)";
    });
  }

  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          revealObs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  document.querySelectorAll(".attendance-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".attendance-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      attendance = btn.dataset.value;
      document.getElementById("presenceField").value = btn.textContent.trim();
      document.getElementById("guestsRow").classList.toggle("show", attendance === "oui");
      if (attendance !== "oui") {
        document.getElementById("nombre_personnes").value = "0";
      } else {
        document.getElementById("nombre_personnes").value = "1";
      }
    });
  });

  document.getElementById("rsvpForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const errorEl = document.getElementById("rsvpError");
    errorEl.classList.remove("show");

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const presence = document.getElementById("presenceField").value.trim();

    if (!prenom || !nom || !presence) {
      alert(lang === "fr" ? "Veuillez remplir le prénom, le nom et indiquer votre présence." : "Please fill in first name, last name and attendance.");
      return;
    }

    if (attendance !== "oui") {
      document.getElementById("nombre_personnes").value = "0";
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Netlify form error");
        const entry = {
          firstName: prenom,
          lastName: nom,
          phone: document.getElementById("telephone").value.trim(),
          attendance: attendance === "oui" ? "yes" : "no",
          guests: attendance === "oui" ? document.getElementById("nombre_personnes").value : "0",
          message: document.getElementById("message").value.trim(),
          date: new Date().toLocaleString(lang === "fr" ? "fr-FR" : "en-GB"),
        };
        const all = getRsvps();
        all.push(entry);
        saveRsvps(all);
        form.style.display = "none";
        document.getElementById("rsvpSuccess").classList.add("show");
      })
      .catch(() => {
        errorEl.classList.add("show");
      });
  });

  document.getElementById("dashUnlock").addEventListener("click", () => {
    if (document.getElementById("dashPassword").value === CONFIG.dashPassword) {
      document.getElementById("dashLock").style.display = "none";
      document.getElementById("dashPanel").classList.add("unlocked");
      renderDashboard();
    } else {
      document.getElementById("dashError").style.display = "block";
    }
  });

  document.getElementById("exportCsv").addEventListener("click", exportCsv);

  applyLang(lang);
  updateCountdown();
  setInterval(updateCountdown, 1000);
  loadPhotos();
})();
