import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./CitationChart.css";

/* ── Venue colour map ── */
const VENUE_COLOR = {
  EACL:        "#7c3aed",
  INTERSPEECH: "#0e387a",
  "IJCNLP-AACL": "#059669",
  EUSIPCO:     "#dc2626",
  APSIPA:      "#d97706",
  ICASSP:      "#0891b2",
};

function venueKey(venue) {
  for (const key of Object.keys(VENUE_COLOR)) {
    if (venue.toUpperCase().includes(key.toUpperCase())) return key;
  }
  return "Other";
}

/* ── Build stacked data from publications array ── */
export default function CitationChart({ pubs }) {
  const svgRef  = useRef(null);
  const wrapRef = useRef(null);
  const [started, setStarted] = useState(false);

  /* Trigger animation when visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    /* ── Aggregate by year + venue ── */
    const venues  = Object.keys(VENUE_COLOR);
    const yearMap = {};
    pubs.forEach(({ year, venue }) => {
      if (!yearMap[year]) {
        yearMap[year] = {};
        venues.forEach((v) => (yearMap[year][v] = 0));
        yearMap[year].Other = 0;
      }
      yearMap[year][venueKey(venue)]++;
    });

    const years   = Object.keys(yearMap).map(Number).sort((a, b) => a - b);
    const allKeys = [...venues, "Other"].filter((v) => years.some((y) => yearMap[y][v] > 0));

    const stackData = d3.stack().keys(allKeys)(
      years.map((y) => ({ year: y, ...yearMap[y] }))
    );

    /* ── Dimensions ── */
    const W   = wrapRef.current?.clientWidth || 700;
    const H   = 320;
    const margin = { top: 20, right: 20, bottom: 48, left: 40 };
    const iW  = W  - margin.left - margin.right;
    const iH  = H  - margin.top  - margin.bottom;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width",  W)
      .attr("height", H)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    /* ── Scales ── */
    const x = d3.scaleBand().domain(years).range([0, iW]).padding(0.35);
    const y = d3.scaleLinear()
      .domain([0, d3.max(stackData[stackData.length - 1], (d) => d[1]) * 1.15])
      .range([iH, 0]);

    /* ── Grid lines ── */
    svg.append("g").attr("class", "grid")
      .call(d3.axisLeft(y).tickSize(-iW).tickFormat("").ticks(5))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll("line").attr("stroke", "#e5e7eb").attr("stroke-dasharray", "4,4"));

    /* ── Axes ── */
    svg.append("g")
      .attr("transform", `translate(0,${iH})`)
      .call(d3.axisBottom(x).tickFormat(String))
      .call((g) => g.select(".domain").attr("stroke", "#e5e7eb"))
      .call((g) => g.selectAll("text").attr("font-size", "13px").attr("font-weight", "600").attr("fill", "#374151"));

    svg.append("g")
      .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format("d")))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll("text").attr("font-size", "11px").attr("fill", "#9ca3af"));

    /* ── Stacked bars ── */
    stackData.forEach((layer) => {
      const vKey  = layer.key;
      const color = VENUE_COLOR[vKey] || "#9ca3af";

      svg.append("g")
        .selectAll("rect")
        .data(layer)
        .join("rect")
        .attr("x",      (d) => x(d.data.year))
        .attr("width",  x.bandwidth())
        .attr("y",      iH)           // start from bottom
        .attr("height", 0)            // animate up
        .attr("fill",   color)
        .attr("rx", 3)
        .transition().duration(700).delay((_, i) => i * 120).ease(d3.easeCubicOut)
        .attr("y",      (d) => y(d[1]))
        .attr("height", (d) => Math.max(0, y(d[0]) - y(d[1])));
    });

    /* ── Total label on top of each bar ── */
    years.forEach((yr) => {
      const total = pubs.filter((p) => p.year === yr).length;
      svg.append("text")
        .attr("x",           x(yr) + x.bandwidth() / 2)
        .attr("y",           y(total) - 8)
        .attr("text-anchor", "middle")
        .attr("font-size",   "13px")
        .attr("font-weight", "700")
        .attr("fill",        "#0e387a")
        .attr("opacity",     0)
        .transition().duration(400).delay(years.indexOf(yr) * 120 + 600)
        .attr("opacity", 1)
        .text(total);
    });

  }, [started, pubs]);

  /* ── Legend ── */
  const activeVenues = Object.entries(VENUE_COLOR).filter(([k]) =>
    pubs.some((p) => venueKey(p.venue) === k)
  );

  return (
    <div className="chart-wrap" ref={wrapRef}>
      <h3 className="chart-title">Research Output by Year</h3>
      <p className="chart-sub">Conference publications grouped by venue</p>

      <div className="chart-legend">
        {activeVenues.map(([k, c]) => (
          <span key={k} className="chart-legend-item">
            <span className="chart-legend-dot" style={{ background: c }} />
            {k}
          </span>
        ))}
      </div>

      <div className="chart-svg-wrap">
        <svg ref={svgRef} />
      </div>
    </div>
  );
}
