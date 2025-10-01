// ============= Dados fictícios =============
const timelineData = {
    labels: [2016,2017,2018,2019,2020,2021,2022,2023,2024],
    values: [9.1,8.6,8.0,7.8,10.5,9.9,8.3,7.4,7.2]
  };
  
  const seriesData = {
    labels: ["Fund I","Fund II","Médio"],
    values: [4.2,6.8,12.5]
  };
  
  const causasData = {
    labels: ["Trabalho","Falta de transporte","Desinteresse","Gravidez","Problemas familiares"],
    values: [34,18,22,8,18]
  };
  
  const perfilData = {
    labels: ["Masculino","Feminino"],
    values: [52,48]
  };
  
  // ============= Gráficos Chart.js =============
  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: timelineData.labels,
      datasets: [{
        label: "Taxa de evasão (%)",
        data: timelineData.values,
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14,165,233,0.2)",
        fill: true
      }]
    },
    options: { responsive: true }
  });
  
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: seriesData.labels,
      datasets: [{
        label: "Taxa de evasão (%)",
        data: seriesData.values,
        backgroundColor: ["#0088FE","#00C49F","#FFBB28"]
      }]
    },
    options: { responsive: true }
  });
  
  new Chart(document.getElementById("pieChartCausas"), {
    type: "pie",
    data: {
      labels: causasData.labels,
      datasets: [{
        data: causasData.values,
        backgroundColor: ["#0088FE","#00C49F","#FFBB28","#FF8042","#A28EF0"]
      }]
    }
  });
  
  new Chart(document.getElementById("pieChartPerfil"), {
    type: "pie",
    data: {
      labels: perfilData.labels,
      datasets: [{
        data: perfilData.values,
        backgroundColor: ["#0ea5e9","#f43f5e"]
      }]
    }
  });
  
  // ============= Mapa Leaflet =============
  const map = L.map("map").setView([-2.4676, -44.0306], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);
  L.marker([-2.4676, -44.0306]).addTo(map).bindPopup("Paço do Lumiar - ponto de exemplo");
  
  // ============= Botão de Modo Escuro/Claro =============
  document.getElementById("toggle-theme").addEventListener("click", () => {
    const html = document.documentElement;
    if (html.getAttribute("data-bs-theme") === "light") {
      html.setAttribute("data-bs-theme", "dark");
      document.getElementById("toggle-theme").innerText = "☀️ Modo claro";
    } else {
      html.setAttribute("data-bs-theme", "light");
      document.getElementById("toggle-theme").innerText = "🌙 Modo escuro";
    }
  });
  