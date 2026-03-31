import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./CoauthorNetwork.css";

// Build graph from publications
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
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Muskaan Singh", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Swarup Ranjan Behera", "Arun Balaji Buduru"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Arun Balaji Buduru", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar", "Swarup Ranjan Behera", "Rajesh Sharma"] },
  { authors: ["Girish", "Orchid Chetia Phukan", "Mohd Mujtaba Akhtar"] },
  { authors: ["Girish", "Mohd Mujtaba Akhtar", "Orchid Chetia Phukan", "Muskaan Singh"] },
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

  const nodes = Array.from(nodeMap.values());
  const links = Array.from(edgeMap.entries()).map(([key, weight]) => {
    const [source, target] = key.split("||");
    return { source, target, weight };
  });
  return { nodes, links };
}

export default function CoauthorNetwork() {
  const svgRef  = useRef(null);
  const wrapRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const { nodes, links } = buildGraph();
    const W = wrapRef.current?.clientWidth  || 700;
    const H = 440;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width",  W)
      .attr("height", H)
      .attr("viewBox", `0 0 ${W} ${H}`);

    const sim = d3.forceSimulation(nodes)
      .force("link",   d3.forceLink(links).id((d) => d.id).distance(90).strength(0.5))
      .force("charge", d3.forceManyBody().strength(-220))
      .force("center", d3.forceCenter(W / 2, H / 2))
      .force("collision", d3.forceCollide(28));

    // Links
    const link = svg.append("g").selectAll("line").data(links).join("line")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", (d) => Math.sqrt(d.weight) * 1.4)
      .attr("stroke-opacity", 0.6);

    // Nodes
    const node = svg.append("g").selectAll("g").data(nodes).join("g")
      .call(
        d3.drag()
          .on("start", (event, d) => {
            if (!event.active) sim.alphaTarget(0.3).restart();
            d.fx = d.x; d.fy = d.y;
          })
          .on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; })
          .on("end",  (event, d) => {
            if (!event.active) sim.alphaTarget(0);
            d.fx = null; d.fy = null;
          })
      );

    node.append("circle")
      .attr("r", (d) => d.id === "Girish" ? 22 : 10 + d.count * 1.5)
      .attr("fill", (d) => d.id === "Girish" ? "#0e387a" : "#60a5fa")
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseenter", (event, d) => {
        const rect = wrapRef.current.getBoundingClientRect();
        setTooltip({ name: d.id, pubs: d.count, x: event.clientX - rect.left, y: event.clientY - rect.top });
      })
      .on("mouseleave", () => setTooltip(null));

    node.append("text")
      .text((d) => d.id === "Girish" ? "Girish" : d.id.split(" ").pop())
      .attr("text-anchor", "middle")
      .attr("dy", (d) => (d.id === "Girish" ? 22 : 10 + d.count * 1.5) + 14)
      .attr("font-size", (d) => d.id === "Girish" ? "12px" : "10px")
      .attr("font-weight", (d) => d.id === "Girish" ? "700" : "500")
      .attr("fill", (d) => d.id === "Girish" ? "#0e387a" : "#374151")
      .style("pointer-events", "none");

    sim.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    return () => sim.stop();
  }, []);

  return (
    <div className="coauthor-wrap" ref={wrapRef}>
      <h3 className="coauthor-title">Co-author Network</h3>
      <p className="coauthor-sub">Drag nodes to explore · Node size = collaboration frequency</p>
      <div className="coauthor-svg-wrap">
        <svg ref={svgRef} />
        {tooltip && (
          <div
            className="coauthor-tooltip"
            style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
          >
            <strong>{tooltip.name}</strong>
            <span>{tooltip.pubs} paper{tooltip.pubs > 1 ? "s" : ""} together</span>
          </div>
        )}
      </div>
    </div>
  );
}
