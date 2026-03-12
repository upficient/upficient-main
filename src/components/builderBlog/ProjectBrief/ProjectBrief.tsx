import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import React from "react";
import "./ProjectBrief.scss";

const ProjectBrief: React.FC<{ data: any }> = ({ data }) => {
  const { title = "Project Brief", paragraphs = [], stats = [] } = data || {};
  const styles = data?.styles || {};

  return (
    <section
      className="pb-section"
      style={{
        padding: styles.padding
          ? `${styles.padding.top || 0}px ${styles.padding.right || 0}px ${styles.padding.bottom || 0}px ${styles.padding.left || 0}px`
          : undefined,
        margin: styles.margin
          ? `${styles.margin.top || 0}px ${styles.margin.right || 0}px ${styles.margin.bottom || 0}px ${styles.margin.left || 0}px`
          : undefined,
        backgroundColor: styles.backgroundColor || undefined,
      }}
    >
      <div className="container">
        {/* Title */}
        {title && <h2 className="pb-section__title">{title}</h2>}

        {/* Paragraphs — support HTML for links */}
        {paragraphs && paragraphs.length > 0 && (
          <div className="pb-section__body">
            {paragraphs.map((p: any, i: number) => (
              <p
                key={i}
                className="pb-section__para"
                dangerouslySetInnerHTML={{ __html: p.text || "" }}
              />
            ))}
          </div>
        )}

        {/* Stats grid */}
        {stats && stats.length > 0 && (
          <div className="pb-section__stats">
            {stats.map((stat: any, i: number) => (
              <div className="pb-section__stat" key={i}>
                <span className="pb-section__stat-number">{stat.number}</span>
                <span className="pb-section__stat-label">{stat.label}</span>
                {stat.icon && (
                  <span className="pb-section__stat-icon">
                    <Image
                      src={getImagePath("", stat.icon)}
                      alt={stat.label || "icon"}
                      width={36}
                      height={36}
                      unoptimized
                    />
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectBrief;
