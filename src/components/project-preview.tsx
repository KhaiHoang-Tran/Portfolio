import { CalendarDays, Flag, KeyRound, Layers3, Route, ShieldCheck } from "lucide-react";

/** An illustrative system overview, not a screenshot of the HRTMS application. */
export function ProjectPreview({ variant }: { variant: "hrtms" }) {
  if (variant !== "hrtms") return null;

  return (
    <div className="preview-shell preview-hrtms" role="img" aria-label="Illustrative HRTMS backend overview showing 136 REST endpoints, 24 controllers, and 25 JPA entities">
      <div className="preview-window">
        <div className="preview-sidebar">
          <div className="preview-logo"><span className="preview-logo-mark">✦</span> HRTMS API</div>
          <div className="preview-side-active"><Route size={13} /> Overview</div>
          <div className="preview-side-line"><ShieldCheck size={13} /> Security</div>
          <div className="preview-side-line"><Flag size={13} /> Tournaments</div>
          <div className="preview-side-line"><CalendarDays size={13} /> Races</div>
          <div className="preview-side-bottom"><Layers3 size={10} /> Java · Spring Boot</div>
        </div>
        <div className="preview-main">
          <div className="preview-top"><span>Backend <span className="text-slate-500">/ System overview</span></span><KeyRound size={14} aria-hidden="true" /></div>
          <div className="preview-heading">Horse Racing Tournament Management</div>
          <p className="preview-subheading">Backend structure and key workflows</p>
          <div className="preview-metrics">
            <div><small>REST endpoints</small><strong>136</strong><span>API surface</span></div>
            <div><small>Controllers</small><strong>24</strong><span>Request handling</span></div>
            <div><small>JPA entities</small><strong>25</strong><span>Data model</span></div>
          </div>
          <div className="preview-route-list">
            <div className="preview-route-title">System capabilities <span>Selected areas</span></div>
            <div className="preview-route-row"><span className="preview-route-method">AUTH</span><span>JWT · OTP · role-based workflows</span></div>
            <div className="preview-route-row"><span className="preview-route-method">CORE</span><span>Tournaments · races · registration</span></div>
            <div className="preview-route-row"><span className="preview-route-method">OPS</span><span>Transactions · notifications · jobs</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
