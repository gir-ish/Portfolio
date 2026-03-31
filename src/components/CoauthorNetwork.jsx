import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./CoauthorNetwork.css";

/* ── Author metadata ── */
const AUTHOR_META = {
  "Girish":                 { initials: "G",   color: "#0e387a", photo: true },
  "Mohd Mujtaba Akhtar":    { initials: "MA",  color: "#7c3aed" },
  "Orchid Chetia Phukan":   { initials: "OC",  color: "#059669" },
  "Farhan Sheth":           { initials: "FS",  color: "#dc2626" },
  "Muskaan Singh":          { initials: "MS",  color: "#d97706" },
  "Swarup Ranjan Behera":   { initials: "SB",  color: "#0891b2" },
  "Arun Balaji Buduru":     { initials: "AB",  color: "#9333ea" },
  "Rajesh Sharma":          { initials: "RS",  color: "#16a34a" },
  "Pailla Balakrishna Reddy": { initials: "PB", color: "#b45309" },
  "Sishir Kalita":          { initials: "SK",  color: "#e11d48" },
  "S.R. Mahadeva Prasanna": { initials: "SP",  color: "#0284c7" },
  "Drishti Singh":          { initials: "DS",  color: "#65a30d" },
  "Shubham Singh":          { initials: "SS",  color: "#c026d3" },
  "Vandana Rajan":          { initials: "VR",  color: "#ea580c" },
  "Priyabrata Mallick":     { initials: "PM",  color: "#4f46e5" },
  "Sai Kiran Patibandla":   { initials: "SP2", color: "#0f766e" },
  "Abu Osama Siddiqui":     { initials: "AO",  color: "#be185d" },
  "Sarthak Jain":           { initials: "SJ",  color: "#78350f" },
  "Ananda Chandra Nayak":   { initials: "AN",  color: "#1d4ed8" },
  "Sanjib Kumar Nayak":     { initials: "SN",  color: "#166534" },
  "Panchal Nayak":          { initials: "PN",  color: "#7e22ce" },
  "Parabattina Bhagath":    { initials: "PBh", color: "#b91c1c" },
  "Santanu Roy":            { initials: "SR",  color: "#0369a1" },
};

function getMeta(name) {
  return AUTHOR_META[name] || { initials: name.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase(), color: "#6b7280" };
}

/* ── Build graph from publications ── */
const PUBS = [
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Farhan Sheth", "Muskaan Singh"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Muskaan Singh"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Farhan Sheth", "Muskaan Singh"] },
  { authors: ["Girish", "Farhan Sheth", "Mohd Mujtaba Akhtar", "Muskaan Singh"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Muskaan Singh", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Swarup Ranjan Behera", "Arun Balaji Buduru"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Muskaan Singh"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Pailla Balakrishna Reddy", "Arun Balaji Buduru", "Rajesh Sharma"] },
];

function buildGraph() {
  const nodeMap = new Map();
  const edgeMap = new Map();

  PUBS.forEach(({ authors }) => {
    authors.forEach((a) => {
      if (!nodeMap.has(a)) nodeMap.set(a, { id: a, count: 0 });
      nodeMap.get(a).count++;
    });
    for (let i = 0; i < authors.length; i++) {
      for (let j = i + 1; j < authors.length; j++) {
        const key = [authors[i], authors[j]].sort().join("||");
        edgeMap.set(key, (edgeMap.get(key) || 0) + 1);
      }
    }
  });

  return {
    nodes: Array.from(nodeMap.values()),
    links: Array.from(edgeMap.entries()).map(([key, weight]) => {
      const [source, target] = key.split("||");
      return { source, target, weight };
    }),
  };
}

const NODE_R = (d) => d.id === "Girish" ? 36 : 24;

export default function CoauthorNetwork() {
  const svgRef  = useRef(null);
  const wrapRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const { nodes, links } = buildGraph();
    const W = wrapRef.current?.clientWidth || 860;
    const H = 620;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width",  W)
      .attr("height", H)
      .attr("viewBox", `0 0 ${W} ${H}`);

    /* ── Defs: clip paths + drop shadow ── */
    const defs = svg.append("defs");

    // Drop shadow filter
    const filter = defs.append("filter").attr("id", "node-shadow").attr("x", "-30%").attr("y", "-30%").attr("width", "160%").attr("height", "160%");
    filter.append("feDropShadow").attr("dx", 0).attr("dy", 2).attr("stdDeviation", 4).attr("flood-opacity", 0.18);

    // One clipPath per node
    nodes.forEach((d) => {
      const r = NODE_R(d);
      defs.append("clipPath")
        .attr("id", `clip-${d.id.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")}`)
        .append("circle")
        .attr("r", r);
    });

    /* ── Simulation ── */
    const sim = d3.forceSimulation(nodes)
      .force("link",      d3.forceLink(links).id((d) => d.id).distance(180).strength(0.4))
      .force("charge",    d3.forceManyBody().strength(-500))
      .force("center",    d3.forceCenter(W / 2, H / 2))
      .force("collision", d3.forceCollide((d) => NODE_R(d) + 22));

    /* ── Links ── */
    const link = svg.append("g").selectAll("line").data(links).join("line")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", (d) => Math.sqrt(d.weight) * 2)
      .attr("stroke-opacity", 0.55);

    /* ── Node groups ── */
    const node = svg.append("g").selectAll("g").data(nodes).join("g")
      .style("cursor", "pointer")
      .call(
        d3.drag()
          .on("start", (event, d) => { if (!event.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
          .on("drag",  (event, d) => { d.fx = event.x; d.fy = event.y; })
          .on("end",   (event, d) => { if (!event.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
      );

    /* ── Outer ring ── */
    node.append("circle")
      .attr("r", (d) => NODE_R(d) + 3)
      .attr("fill", "none")
      .attr("stroke", (d) => getMeta(d.id).color)
      .attr("stroke-width", 2.5)
      .attr("opacity", 0.5);

    /* ── Avatar background circle ── */
    node.append("circle")
      .attr("r", (d) => NODE_R(d))
      .attr("fill", (d) => getMeta(d.id).color)
      .attr("filter", "url(#node-shadow)");

    /* ── Girish: real photo ── */
    node.filter((d) => d.id === "Girish")
      .append("image")
      .attr("href", `${BASE}girish.jpg`)
      .attr("x", (d) => -NODE_R(d))
      .attr("y", (d) => -NODE_R(d))
      .attr("width",  (d) => NODE_R(d) * 2)
      .attr("height", (d) => NODE_R(d) * 2)
      .attr("clip-path", (d) => `url(#clip-${d.id.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")})`)
      .attr("preserveAspectRatio", "xMidYMid slice");

    /* ── Others: initials ── */
    node.filter((d) => d.id !== "Girish")
      .append("text")
      .text((d) => getMeta(d.id).initials)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("font-size", (d) => NODE_R(d) * 0.65)
      .attr("font-weight", "800")
      .attr("fill", "#fff")
      .style("pointer-events", "none");

    /* ── Name label below ── */
    node.append("text")
      .text((d) => {
        const parts = d.id.split(" ");
        return parts.length <= 2 ? d.id : parts[0] + " " + parts[parts.length - 1];
      })
      .attr("text-anchor", "middle")
      .attr("dy", (d) => NODE_R(d) + 16)
      .attr("font-size", (d) => d.id === "Girish" ? "12px" : "10px")
      .attr("font-weight", (d) => d.id === "Girish" ? "700" : "500")
      .attr("fill", (d) => getMeta(d.id).color)
      .style("pointer-events", "none");

    /* ── Tooltip on hover ── */
    node
      .on("mouseenter", (event, d) => {
        const rect = wrapRef.current.getBoundingClientRect();
        setTooltip({ name: d.id, pubs: d.count, x: event.clientX - rect.left, y: event.clientY - rect.top });
        d3.select(event.currentTarget).select("circle:first-of-type").attr("opacity", 1).attr("stroke-width", 4);
      })
      .on("mousemove", (event) => {
        const rect = wrapRef.current.getBoundingClientRect();
        setTooltip((t) => t ? { ...t, x: event.clientX - rect.left, y: event.clientY - rect.top } : t);
      })
      .on("mouseleave", (event) => {
        setTooltip(null);
        d3.select(event.currentTarget).select("circle:first-of-type").attr("opacity", 0.5).attr("stroke-width", 2.5);
      });

    sim.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    return () => sim.stop();
  }, [BASE]);

  return (
    <div className="coauthor-wrap" ref={wrapRef}>
      <h3 className="coauthor-title">Co-author Network</h3>
      <p className="coauthor-sub">Drag nodes to explore · Node size = collaboration frequency</p>
      <div className="coauthor-svg-wrap">
        <svg ref={svgRef} />
        {tooltip && (
          <div className="coauthor-tooltip" style={{ left: tooltip.x + 14, top: tooltip.y - 14 }}>
            <strong>{tooltip.name}</strong>
            <span>{tooltip.pubs} paper{tooltip.pubs > 1 ? "s" : ""} together</span>
          </div>
        )}
      </div>
    </div>
  );
}
