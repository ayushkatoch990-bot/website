"use strict";

const STORAGE_KEY = "artGalleryManagementState_v1";

// Initial Seed Data for all 6 Management Modules
const defaultState = {
  artists: [
    {
      id: "art-1",
      name: "Leonardo da Vinci",
      specialty: "High Renaissance Master",
      country: "Italy",
      email: "archives@renaissance.org",
      bio: "Painter, draughtsman, engineer, and polymath of the High Renaissance, celebrated for iconic compositions."
    },
    {
      id: "art-2",
      name: "Vincent van Gogh",
      specialty: "Post-Impressionism",
      country: "Netherlands",
      email: "collection@vangogh.org",
      bio: "Pioneering Post-Impressionist painter whose expressive brushwork and vibrant color shaped modern art."
    },
    {
      id: "art-3",
      name: "Katsushika Hokusai",
      specialty: "Ukiyo-e Woodblock Print",
      country: "Japan",
      email: "edo@ukiyoe.jp",
      bio: "Japanese ukiyo-e artist of the Edo period, internationally renowned for the Thirty-Six Views of Mount Fuji."
    },
    {
      id: "art-4",
      name: "Elena Rostova",
      specialty: "Contemporary Painting & Sculpture",
      country: "France",
      email: "elena@contemporarystudio.art",
      bio: "Contemporary visual artist exploring light, urban rhythm, and organic sculptural equilibrium."
    },
    {
      id: "art-5",
      name: "Aarav Mehta",
      specialty: "Fine Art Photography & Digital Media",
      country: "India",
      email: "aarav@digitalcanvas.in",
      bio: "Multidisciplinary photographer and generative digital artist capturing atmospheric landscapes and street stories."
    }
  ],

  spaces: [
    {
      id: "sp-1",
      name: "Main Exhibition Hall",
      floor: "Ground Floor · Zone A",
      capacity: 6,
      type: "Museum Track Lighting + Climate Control"
    },
    {
      id: "sp-2",
      name: "Renaissance & Heritage Wing",
      floor: "First Floor · Zone B",
      capacity: 5,
      type: "Conservation Low-UV Warm Lighting"
    },
    {
      id: "sp-3",
      name: "Sculpture & Modern Court",
      floor: "Ground Floor · Atrium",
      capacity: 4,
      type: "Natural Skylight + 360° Pedestals"
    },
    {
      id: "sp-4",
      name: "Digital & Photography Lab",
      floor: "Second Floor · Media Suite",
      capacity: 5,
      type: "Darkened Projection & Backlit Frames"
    }
  ],

  exhibitions: [
    {
      id: "ex-1",
      title: "The Art of Imagination",
      curator: "Sheetal & Curatorial Team",
      startDate: "2026-11-01",
      endDate: "2026-11-30",
      status: "Active",
      theme: "A celebration of contemporary painting, expressive color, and sculptural balance across physical forms."
    },
    {
      id: "ex-2",
      title: "Timeless Masters & Heritage",
      curator: "Ayush & Archival Board",
      startDate: "2026-11-10",
      endDate: "2026-12-20",
      status: "Active",
      theme: "Iconic historical works and master studies celebrating Renaissance portraiture, Post-Impressionism, and Edo prints."
    },
    {
      id: "ex-3",
      title: "Lenses & Digital Horizons",
      curator: "Srijal, Shneha & Ridhi",
      startDate: "2026-12-01",
      endDate: "2027-01-15",
      status: "Upcoming",
      theme: "Exploring modern street photography, serene forest studies, and new-media digital art."
    }
  ],

  artworks: [
    {
      id: "aw-1",
      title: "Starry Dreams",
      artist: "Vincent van Gogh",
      category: "Painting",
      year: "2026",
      dimensions: "92 × 73 cm",
      price: "$4,800",
      exhibitionId: "ex-1",
      spaceId: "sp-1",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=85",
      description: "A colorful exploration of movement, light and imagination, inspired by the expressive language of modern painting."
    },
    {
      id: "aw-2",
      title: "Classical Form",
      artist: "Elena Rostova",
      category: "Sculpture",
      year: "2026",
      dimensions: "140 × 55 × 50 cm",
      price: "$6,200",
      exhibitionId: "ex-1",
      spaceId: "sp-3",
      image: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=800&q=85",
      description: "An exploration of shape, texture and proportion celebrating the timeless art of sculpture."
    },
    {
      id: "aw-3",
      title: "Sunset Dreams",
      artist: "Elena Rostova",
      category: "Painting",
      year: "2026",
      dimensions: "100 × 80 cm",
      price: "$3,900",
      exhibitionId: "ex-1",
      spaceId: "sp-1",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=85",
      description: "Warm colors and expressive brushwork capture the fleeting beauty of an imagined sunset."
    },
    {
      id: "aw-4",
      title: "Forest Serenity",
      artist: "Aarav Mehta",
      category: "Photography",
      year: "2025",
      dimensions: "80 × 60 cm",
      price: "$1,850",
      exhibitionId: "ex-3",
      spaceId: "sp-4",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=85",
      description: "A peaceful photographic journey through the textures, colors and quiet atmosphere of nature."
    },
    {
      id: "aw-5",
      title: "Urban Stories",
      artist: "Aarav Mehta",
      category: "Photography",
      year: "2025",
      dimensions: "80 × 60 cm",
      price: "$2,100",
      exhibitionId: "ex-3",
      spaceId: "sp-4",
      image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85",
      description: "An atmospheric visual study of city life, architecture and the stories hidden in everyday moments."
    },
    {
      id: "aw-6",
      title: "Digital Dreams",
      artist: "Aarav Mehta",
      category: "Digital Art",
      year: "2026",
      dimensions: "4K Generative Canvas",
      price: "$2,400",
      exhibitionId: "ex-3",
      spaceId: "sp-4",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=85",
      description: "A contemporary visual experiment in color, imagination and the possibilities of digital creativity."
    },
    {
      id: "aw-7",
      title: "Inner Balance",
      artist: "Elena Rostova",
      category: "Sculpture",
      year: "2026",
      dimensions: "115 × 45 × 45 cm",
      price: "$5,400",
      exhibitionId: "ex-1",
      spaceId: "sp-3",
      image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=85",
      description: "An artistic study of balance, material and the relationship between physical forms and open space."
    },
    {
      id: "aw-8",
      title: "City Lights",
      artist: "Elena Rostova",
      category: "Painting",
      year: "2025",
      dimensions: "120 × 90 cm",
      price: "$4,200",
      exhibitionId: "ex-1",
      spaceId: "sp-1",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=85",
      description: "A lively interpretation of modern places, exploring movement, atmosphere and the rhythm of city life."
    },
    {
      id: "aw-9",
      title: "The Last Supper",
      artist: "Leonardo da Vinci",
      category: "Painting",
      year: "1498",
      dimensions: "460 × 880 cm (Study)",
      price: "Museum Loan",
      exhibitionId: "ex-2",
      spaceId: "sp-2",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg?width=800",
      description: "Inspired by Leonardo da Vinci's iconic Renaissance composition, depicting Jesus sharing his final meal with his disciples."
    },
    {
      id: "aw-10",
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      category: "Painting",
      year: "1889",
      dimensions: "73.7 × 92.1 cm",
      price: "Museum Loan",
      exhibitionId: "ex-2",
      spaceId: "sp-2",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/VanGogh-starry_night.jpg?width=800",
      description: "Inspired by Van Gogh's expressive night skies, with swirling movement, brilliant colors, and a dreamlike atmosphere."
    },
    {
      id: "aw-11",
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      category: "Portrait",
      year: "1503",
      dimensions: "77 × 53 cm",
      price: "Museum Loan",
      exhibitionId: "ex-2",
      spaceId: "sp-2",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mona_Lisa.jpg?width=800",
      description: "Inspired by the timeless Renaissance portrait, celebrated for its subtle expression and masterful composition."
    },
    {
      id: "aw-12",
      title: "The Great Wave",
      artist: "Katsushika Hokusai",
      category: "Print",
      year: "1831",
      dimensions: "25.7 × 37.9 cm",
      price: "Museum Loan",
      exhibitionId: "ex-2",
      spaceId: "sp-2",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wave_off_Kanagawa.jpg?width=800",
      description: "Inspired by Hokusai's famous Japanese woodblock print, featuring a towering ocean wave and dramatic movement."
    }
  ]
};

// Load or initialize state
let state = loadState();
let activeGalleryCategory = "All";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn("Could not read localStorage:", err);
  }
  return structuredClone(defaultState);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("Could not save to localStorage:", err);
  }
}

// DOM Elements
const artGrid = document.getElementById("artGrid");
const filters = document.getElementById("filters");
const galleryStatus = document.getElementById("galleryStatus");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const artDialog = document.getElementById("artDialog");
const modalClose = document.getElementById("modalClose");
const enquireButton = document.getElementById("enquireButton");
const toast = document.getElementById("toast");

let previousFocus = null;
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function addImageFallback(img) {
  img.addEventListener("error", () => {
    img.hidden = true;
    img.parentElement.classList.add("image-unavailable");
    img.parentElement.setAttribute("data-message", "Image unavailable");
  }, { once: true });
}

// Helper lookups
function getExhibitionById(id) {
  return state.exhibitions.find(e => e.id === id) || null;
}

function getSpaceById(id) {
  return state.spaces.find(s => s.id === id) || null;
}

// 1. RENDER KPI BAR
function renderKPIs() {
  document.getElementById("kpiArtists").textContent = state.artists.length;
  document.getElementById("kpiArtworks").textContent = state.artworks.length;
  document.getElementById("kpiExhibitions").textContent = state.exhibitions.length;
  document.getElementById("kpiSpaces").textContent = state.spaces.length;

  const assignedCount = state.artworks.filter(a => a.spaceId && a.exhibitionId).length;
  document.getElementById("kpiAssignedSub").textContent =
    `${assignedCount} of ${state.artworks.length} artworks placed`;
}

// 2. RENDER ARTIST PROFILES
function renderArtists() {
  const artistList = document.getElementById("artistList");
  const badge = document.getElementById("artistCountBadge");
  badge.textContent = `${state.artists.length} Artist${state.artists.length === 1 ? "" : "s"}`;

  artistList.innerHTML = state.artists.map(artist => {
    const count = state.artworks.filter(
      art => art.artist.toLowerCase() === artist.name.toLowerCase()
    ).length;

    return `
      <article class="info-card">
        <div>
          <h4>${escapeHTML(artist.name)}</h4>
          <p class="info-card-meta">${escapeHTML(artist.specialty)} · ${escapeHTML(artist.country)}</p>
          <p>${escapeHTML(artist.bio)}</p>
        </div>
        <div class="card-footer">
          <span class="badge">${count} Artwork${count === 1 ? "" : "s"}</span>
          <button type="button" class="delete-btn" data-delete-artist="${escapeHTML(artist.id)}">Remove</button>
        </div>
      </article>
    `;
  }).join("");

  // Populate Artist Select in Artwork Form
  const artistSelect = document.getElementById("artArtistSelect");
  artistSelect.innerHTML = state.artists.map(artist =>
    `<option value="${escapeHTML(artist.name)}">${escapeHTML(artist.name)} (${escapeHTML(artist.country)})</option>`
  ).join("");
}

// 3. RENDER ARTWORK RECORDS TABLE
function renderArtworkTable(searchTerm = "") {
  const tbody = document.getElementById("artworkTableBody");
  const query = searchTerm.trim().toLowerCase();

  const filtered = state.artworks.filter(art =>
    !query ||
    art.title.toLowerCase().includes(query) ||
    art.artist.toLowerCase().includes(query) ||
    art.category.toLowerCase().includes(query)
  );

  tbody.innerHTML = filtered.map(art => {
    const ex = getExhibitionById(art.exhibitionId);
    const sp = getSpaceById(art.spaceId);

    const statusBadge = ex && sp
      ? `<span class="badge badge-success">${escapeHTML(ex.title)}</span><br><small class="muted">${escapeHTML(sp.name)}</small>`
      : `<span class="badge badge-muted">Unassigned (In Storage)</span>`;

    return `
      <tr>
        <td>
          <div class="table-art-cell">
            <img class="table-thumb" src="${escapeHTML(art.image)}" alt="${escapeHTML(art.title)}">
            <div>
              <strong>${escapeHTML(art.title)}</strong><br>
              <small class="muted">${escapeHTML(art.dimensions || "Standard size")}</small>
            </div>
          </div>
        </td>
        <td>${escapeHTML(art.artist)}</td>
        <td>${escapeHTML(art.category)} · ${escapeHTML(art.year)}</td>
        <td>${statusBadge}</td>
        <td class="price">${escapeHTML(art.price)}</td>
        <td>
          <button type="button" class="delete-btn" data-delete-artwork="${escapeHTML(art.id)}">Delete</button>
        </td>
      </tr>
    `;
  }).join("");
}

// 4. RENDER EXHIBITIONS
function renderExhibitions() {
  const list = document.getElementById("exhibitionList");
  const badge = document.getElementById("exhibitionCountBadge");
  badge.textContent = `${state.exhibitions.length} Show${state.exhibitions.length === 1 ? "" : "s"}`;

  list.innerHTML = state.exhibitions.map(ex => {
    const assignedCount = state.artworks.filter(a => a.exhibitionId === ex.id).length;
    return `
      <article class="info-card">
        <div>
          <div class="panel-header" style="margin-bottom:6px">
            <span class="badge ${ex.status === "Active" ? "badge-success" : ""}">${escapeHTML(ex.status)}</span>
            <small class="muted">${escapeHTML(ex.startDate)} → ${escapeHTML(ex.endDate)}</small>
          </div>
          <h4>${escapeHTML(ex.title)}</h4>
          <p class="info-card-meta">Curator: ${escapeHTML(ex.curator)}</p>
          <p>${escapeHTML(ex.theme)}</p>
        </div>
        <div class="card-footer">
          <span class="badge">${assignedCount} Exhibits Assigned</span>
          <button type="button" class="delete-btn" data-delete-exhibition="${escapeHTML(ex.id)}">Remove</button>
        </div>
      </article>
    `;
  }).join("");
}

// 5. RENDER GALLERY SPACES
function renderSpaces() {
  const list = document.getElementById("spaceList");
  const badge = document.getElementById("spaceCountBadge");
  badge.textContent = `${state.spaces.length} Room${state.spaces.length === 1 ? "" : "s"}`;

  list.innerHTML = state.spaces.map(sp => {
    const used = state.artworks.filter(a => a.spaceId === sp.id).length;
    const pct = Math.min(100, Math.round((used / sp.capacity) * 100));

    return `
      <article class="info-card">
        <div>
          <h4>${escapeHTML(sp.name)}</h4>
          <p class="info-card-meta">${escapeHTML(sp.floor)}</p>
          <p>${escapeHTML(sp.type)}</p>

          <div class="capacity-wrap">
            <div class="capacity-labels">
              <span>Wall Occupancy</span>
              <span>${used} / ${sp.capacity} Artworks (${pct}%)</span>
            </div>
            <div class="capacity-bar">
              <div class="capacity-fill" style="width:${pct}%"></div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <span class="muted">${sp.capacity - used} slots available</span>
          <button type="button" class="delete-btn" data-delete-space="${escapeHTML(sp.id)}">Remove</button>
        </div>
      </article>
    `;
  }).join("");
}

// 6. RENDER ARTWORK ASSIGNMENT
function renderAssignments() {
  const artSelect = document.getElementById("assignArtworkSelect");
  const exSelect = document.getElementById("assignExhibitionSelect");
  const spSelect = document.getElementById("assignSpaceSelect");
  const tbody = document.getElementById("assignmentTableBody");

  artSelect.innerHTML = state.artworks.map(a =>
    `<option value="${escapeHTML(a.id)}">${escapeHTML(a.title)} — ${escapeHTML(a.artist)}</option>`
  ).join("");

  exSelect.innerHTML = state.exhibitions.map(ex =>
    `<option value="${escapeHTML(ex.id)}">${escapeHTML(ex.title)} (${escapeHTML(ex.status)})</option>`
  ).join("");

  spSelect.innerHTML = state.spaces.map(sp => {
    const used = state.artworks.filter(a => a.spaceId === sp.id).length;
    return `<option value="${escapeHTML(sp.id)}">${escapeHTML(sp.name)} (${used}/${sp.capacity} used)</option>`;
  }).join("");

  tbody.innerHTML = state.artworks.map(art => {
    const ex = getExhibitionById(art.exhibitionId);
    const sp = getSpaceById(art.spaceId);

    return `
      <tr>
        <td><strong>${escapeHTML(art.title)}</strong></td>
        <td>${escapeHTML(art.artist)}</td>
        <td>${ex ? `<span class="badge badge-success">${escapeHTML(ex.title)}</span>` : `<span class="muted">Unassigned</span>`}</td>
        <td>${sp ? escapeHTML(sp.name) : `<span class="muted">Storage Vault</span>`}</td>
        <td>
          ${(ex || sp)
            ? `<button type="button" class="delete-btn" data-unassign-artwork="${escapeHTML(art.id)}">Unassign</button>`
            : `<span class="muted">—</span>`
          }
        </td>
      </tr>
    `;
  }).join("");
}

// 7. RENDER EXHIBITION CATALOGUE
function renderCatalogue(selectedExhibitionId) {
  const filterSelect = document.getElementById("catalogueFilterSelect");
  const currentVal = selectedExhibitionId || filterSelect.value || "ALL";

  filterSelect.innerHTML = `
    <option value="ALL">All Exhibitions (Complete Master Catalogue)</option>
    ${state.exhibitions.map(ex =>
      `<option value="${escapeHTML(ex.id)}" ${ex.id === currentVal ? "selected" : ""}>${escapeHTML(ex.title)}</option>`
    ).join("")}
  `;

  const banner = document.getElementById("catalogueHeaderBanner");
  const grid = document.getElementById("catalogueGrid");

  const chosenEx = currentVal === "ALL" ? null : getExhibitionById(currentVal);

  if (chosenEx) {
    banner.innerHTML = `
      <p class="eyebrow">OFFICIAL EXHIBITION CATALOGUE · ${escapeHTML(chosenEx.status.toUpperCase())}</p>
      <h4>${escapeHTML(chosenEx.title)}</h4>
      <p class="muted">Curated by ${escapeHTML(chosenEx.curator)} · Dates: ${escapeHTML(chosenEx.startDate)} to ${escapeHTML(chosenEx.endDate)}</p>
      <p style="margin-top:8px;font-size:13px">${escapeHTML(chosenEx.theme)}</p>
    `;
  } else {
    banner.innerHTML = `
      <p class="eyebrow">COMPLETE GALLERY ARCHIVE</p>
      <h4>Master Exhibition Catalogue</h4>
      <p class="muted">Showing all cataloged artworks across every active exhibition and gallery room.</p>
    `;
  }

  const items = state.artworks.filter(a =>
    currentVal === "ALL" ? true : a.exhibitionId === currentVal
  );

  if (items.length === 0) {
    grid.innerHTML = `<p class="muted">No artworks are assigned to this exhibition yet. Use the "5. Artwork Assignment" tab to assign pieces.</p>`;
    return;
  }

  grid.innerHTML = items.map((art, idx) => {
    const sp = getSpaceById(art.spaceId);
    const ex = getExhibitionById(art.exhibitionId);
    return `
      <article class="catalogue-item">
        <img src="${escapeHTML(art.image)}" alt="${escapeHTML(art.title)}" loading="lazy">
        <div>
          <span class="eyebrow">CAT. NO. #${String(idx + 1).padStart(2, "0")} · ${escapeHTML(art.category)}</span>
          <h4>${escapeHTML(art.title)} (${escapeHTML(art.year)})</h4>
          <p class="muted"><strong>Artist:</strong> ${escapeHTML(art.artist)}</p>
          <p class="muted"><strong>Room:</strong> ${sp ? escapeHTML(sp.name) : "Archival Storage"}</p>
          <p class="muted"><strong>Exhibition:</strong> ${ex ? escapeHTML(ex.title) : "Unassigned"}</p>
          <p class="price" style="margin-top:6px">${escapeHTML(art.price)}</p>
        </div>
      </article>
    `;
  }).join("");
}

// 8. RENDER PUBLIC VISUAL GALLERY
function renderGallery(category = activeGalleryCategory) {
  activeGalleryCategory = category;

  const visibleArt = state.artworks
    .map((art, index) => ({ ...art, index }))
    .filter(art => category === "All" || art.category === category);

  galleryStatus.textContent = `${visibleArt.length} artwork${visibleArt.length === 1 ? "" : "s"} displayed in collection`;

  artGrid.innerHTML = visibleArt.map((art, position) => {
    const sp = getSpaceById(art.spaceId);
    return `
      <article
        class="art-card"
        tabindex="0"
        role="button"
        aria-label="View details for ${escapeHTML(art.title)}"
        data-index="${art.index}"
        style="animation-delay:${position * 40}ms">

        <div class="art-image-wrap">
          <img
            src="${escapeHTML(art.image)}"
            alt="${escapeHTML(art.title)}"
            loading="lazy">
        </div>

        <div class="art-info">
          <h3>${escapeHTML(art.title)}</h3>
          <p>${escapeHTML(art.artist)}</p>
          <p>${escapeHTML(art.category)} · ${escapeHTML(art.year)}</p>
          <span class="art-placement-tag">📍 ${sp ? escapeHTML(sp.name) : "In Vault Storage"}</span>

          <div class="art-bottom">
            <span class="price">${escapeHTML(art.price)}</span>
            <span class="view-icon" aria-hidden="true">↗</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  artGrid.querySelectorAll(".art-image-wrap img").forEach(addImageFallback);
}

function renderAll() {
  renderKPIs();
  renderArtists();
  renderArtworkTable(document.getElementById("inventorySearch")?.value || "");
  renderExhibitions();
  renderSpaces();
  renderAssignments();
  renderCatalogue();
  renderGallery();
}

// TAB SWITCHING
const mgmtTabs = document.getElementById("mgmtTabs");

function switchTab(tabName) {
  mgmtTabs.querySelectorAll(".mgmt-tab").forEach(btn => {
    const isMatch = btn.dataset.tab === tabName;
    btn.classList.toggle("active", isMatch);
    btn.setAttribute("aria-selected", String(isMatch));
  });

  document.querySelectorAll(".mgmt-panel").forEach(panel => {
    const isMatch = panel.id === `panel-${tabName}`;
    panel.classList.toggle("active", isMatch);
    panel.hidden = !isMatch;
  });
}

mgmtTabs.addEventListener("click", event => {
  const btn = event.target.closest("[data-tab]");
  if (btn) {
    switchTab(btn.dataset.tab);
  }
});

document.querySelectorAll("[data-jump-tab]").forEach(link => {
  link.addEventListener("click", () => {
    switchTab(link.dataset.jumpTab);
  });
});

// FORM SUBMISSIONS

// 1. Add Artist
document.getElementById("artistForm").addEventListener("submit", event => {
  event.preventDefault();
  const newArtist = {
    id: `art-${Date.now()}`,
    name: document.getElementById("artistName").value.trim(),
    specialty: document.getElementById("artistSpecialty").value.trim(),
    country: document.getElementById("artistCountry").value.trim(),
    email: document.getElementById("artistEmail").value.trim(),
    bio: document.getElementById("artistBio").value.trim()
  };

  state.artists.unshift(newArtist);
  saveState();
  renderAll();
  event.target.reset();
  showToast(`Artist profile "${newArtist.name}" added.`);
});

// 2. Add Artwork Record
document.getElementById("artworkForm").addEventListener("submit", event => {
  event.preventDefault();
  const newArt = {
    id: `aw-${Date.now()}`,
    title: document.getElementById("artTitleInput").value.trim(),
    artist: document.getElementById("artArtistSelect").value,
    category: document.getElementById("artCategoryInput").value,
    year: document.getElementById("artYearInput").value.trim(),
    dimensions: document.getElementById("artDimensionsInput").value.trim() || "Standard",
    price: document.getElementById("artPriceInput").value.trim(),
    image: document.getElementById("artImageInput").value.trim(),
    description: document.getElementById("artDescInput").value.trim(),
    exhibitionId: "",
    spaceId: ""
  };

  state.artworks.unshift(newArt);
  saveState();
  renderAll();
  event.target.reset();
  showToast(`Artwork "${newArt.title}" added to inventory.`);
});

// 3. Create Exhibition
document.getElementById("exhibitionForm").addEventListener("submit", event => {
  event.preventDefault();
  const newEx = {
    id: `ex-${Date.now()}`,
    title: document.getElementById("exTitleInput").value.trim(),
    curator: document.getElementById("exCuratorInput").value.trim(),
    startDate: document.getElementById("exStartInput").value,
    endDate: document.getElementById("exEndInput").value,
    status: document.getElementById("exStatusInput").value,
    theme: document.getElementById("exThemeInput").value.trim()
  };

  state.exhibitions.unshift(newEx);
  saveState();
  renderAll();
  event.target.reset();
  showToast(`Exhibition "${newEx.title}" created.`);
});

// 4. Add Gallery Space
document.getElementById("spaceForm").addEventListener("submit", event => {
  event.preventDefault();
  const newSpace = {
    id: `sp-${Date.now()}`,
    name: document.getElementById("spaceNameInput").value.trim(),
    floor: document.getElementById("spaceFloorInput").value.trim(),
    capacity: Number(document.getElementById("spaceCapacityInput").value) || 5,
    type: document.getElementById("spaceTypeInput").value.trim()
  };

  state.spaces.push(newSpace);
  saveState();
  renderAll();
  event.target.reset();
  showToast(`Gallery space "${newSpace.name}" added.`);
});

// 5. Assign Artwork to Exhibition & Space
document.getElementById("assignmentForm").addEventListener("submit", event => {
  event.preventDefault();
  const artId = document.getElementById("assignArtworkSelect").value;
  const exId = document.getElementById("assignExhibitionSelect").value;
  const spId = document.getElementById("assignSpaceSelect").value;

  const artwork = state.artworks.find(a => a.id === artId);
  const space = getSpaceById(spId);

  if (!artwork || !space) return;

  const currentOccupancy = state.artworks.filter(
    a => a.spaceId === spId && a.id !== artId
  ).length;

  if (currentOccupancy >= space.capacity) {
    showToast(`"${space.name}" is at full capacity (${space.capacity} artworks).`);
    return;
  }

  artwork.exhibitionId = exId;
  artwork.spaceId = spId;

  saveState();
  renderAll();
  showToast(`Assigned "${artwork.title}" to ${space.name}.`);
});

// DELETE & UNASSIGN ACTIONS (Event Delegation)
document.getElementById("management").addEventListener("click", event => {
  const delArtistId = event.target.dataset.deleteArtist;
  if (delArtistId) {
    state.artists = state.artists.filter(a => a.id !== delArtistId);
    saveState();
    renderAll();
    showToast("Artist profile removed.");
    return;
  }

  const delArtId = event.target.dataset.deleteArtwork;
  if (delArtId) {
    state.artworks = state.artworks.filter(a => a.id !== delArtId);
    saveState();
    renderAll();
    showToast("Artwork record deleted from inventory.");
    return;
  }

  const delExId = event.target.dataset.deleteExhibition;
  if (delExId) {
    state.exhibitions = state.exhibitions.filter(e => e.id !== delExId);
    state.artworks.forEach(a => {
      if (a.exhibitionId === delExId) a.exhibitionId = "";
    });
    saveState();
    renderAll();
    showToast("Exhibition removed.");
    return;
  }

  const delSpId = event.target.dataset.deleteSpace;
  if (delSpId) {
    state.spaces = state.spaces.filter(s => s.id !== delSpId);
    state.artworks.forEach(a => {
      if (a.spaceId === delSpId) a.spaceId = "";
    });
    saveState();
    renderAll();
    showToast("Gallery space removed.");
    return;
  }

  const unassignId = event.target.dataset.unassignArtwork;
  if (unassignId) {
    const art = state.artworks.find(a => a.id === unassignId);
    if (art) {
      art.exhibitionId = "";
      art.spaceId = "";
      saveState();
      renderAll();
      showToast(`"${art.title}" moved back to storage.`);
    }
  }
});

// Search Filter in Inventory Table
document.getElementById("inventorySearch").addEventListener("input", event => {
  renderArtworkTable(event.target.value);
});

// Catalogue Filter & Print
document.getElementById("catalogueFilterSelect").addEventListener("change", event => {
  renderCatalogue(event.target.value);
});

document.getElementById("printCatalogueBtn").addEventListener("click", () => {
  window.print();
});

// Reset Demo Data
document.getElementById("resetDataBtn").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(defaultState);
  renderAll();
  showToast("Demo management data restored.");
});

// PUBLIC GALLERY FILTERS & MODAL
filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  filters.querySelectorAll("[data-filter]").forEach(filterButton => {
    const active = filterButton === button;
    filterButton.classList.toggle("active", active);
    filterButton.setAttribute("aria-pressed", String(active));
  });

  renderGallery(button.dataset.filter);
});

function openArtwork(index) {
  const art = state.artworks[index];
  if (!art) return;

  previousFocus = document.activeElement;

  const modalImage = document.getElementById("modalImage");
  modalImage.hidden = false;
  modalImage.src = art.image;
  modalImage.alt = art.title;

  const ex = getExhibitionById(art.exhibitionId);
  const sp = getSpaceById(art.spaceId);

  document.getElementById("modalTitle").textContent = art.title;
  document.getElementById("modalArtist").textContent = `By ${art.artist}`;
  document.getElementById("modalCategory").textContent = `${art.category} · ${art.year}`;
  document.getElementById("modalExhibition").textContent = ex ? ex.title : "Not currently in an active exhibition";
  document.getElementById("modalSpace").textContent = sp ? `${sp.name} (${sp.floor})` : "Archival Storage Vault";
  document.getElementById("modalDimensions").textContent = art.dimensions || "Standard Gallery Format";
  document.getElementById("modalDescription").textContent = art.description;
  document.getElementById("modalPrice").textContent = art.price;

  modalImage.onerror = () => {
    modalImage.hidden = true;
  };

  if (typeof artDialog.showModal === "function") {
    artDialog.showModal();
    modalClose.focus();
  } else {
    showToast("Please open this website in a modern browser.");
  }
}

artGrid.addEventListener("click", event => {
  const card = event.target.closest(".art-card");
  if (card) {
    openArtwork(Number(card.dataset.index));
  }
});

artGrid.addEventListener("keydown", event => {
  const card = event.target.closest(".art-card");
  if (!card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  openArtwork(Number(card.dataset.index));
});

function closeArtwork() {
  if (artDialog.open) {
    artDialog.close();
  }
}

modalClose.addEventListener("click", closeArtwork);

artDialog.addEventListener("click", event => {
  if (event.target === artDialog) {
    closeArtwork();
  }
});

artDialog.addEventListener("close", () => {
  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
  previousFocus = null;
});

// Mobile navigation
function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.addEventListener("click", event => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

// Enquiry Modal
const enquiryModal = document.getElementById("enquiryModal");
const enquiryForm = document.getElementById("enquiryForm");
const closeEnquiry = document.getElementById("closeEnquiry");

enquireButton.addEventListener("click", event => {
  event.preventDefault();
  const title = document.getElementById("modalTitle").textContent;
  document.getElementById("artworkTitle").value = title;
  artDialog.close();
  enquiryModal.style.display = "flex";
});

closeEnquiry.addEventListener("click", () => {
  enquiryModal.style.display = "none";
});

enquiryModal.addEventListener("click", event => {
  if (event.target === enquiryModal) {
    enquiryModal.style.display = "none";
  }
});

enquiryForm.addEventListener("submit", event => {
  event.preventDefault();

  const title = document.getElementById("artworkTitle").value;
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const galleryEmail = "ayushkatoch990@gmail.com";

  const subject = encodeURIComponent(`Artwork enquiry: ${title}`);
  const body = encodeURIComponent(
    `Artwork: ${title}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  );

  window.location.href = `mailto:${galleryEmail}?subject=${subject}&body=${body}`;
});

// Initialize all modules on page load
renderAll();