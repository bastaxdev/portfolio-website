import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";
import { cvData } from "@/data/cv";

Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.ttf" },
    { src: "/fonts/Inter-Bold.ttf", fontWeight: 700 },
  ],
});

const ACCENT = "#8b7cf6";
const DARK = "#080808";
const MUTED = "#555555";
const FAINT = "#888888";
const TAG_BG = "#f0eeff";
const BORDER = "#e5e5e5";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 48,
    paddingVertical: 44,
    fontFamily: "Inter",
    color: DARK,
  },
  header: {
    marginBottom: 22,
    paddingBottom: 14,
    borderBottom: `1pt solid ${BORDER}`,
  },
  name: {
    fontSize: 26,
    fontFamily: "Inter",
    fontWeight: 700,
    color: DARK,
    marginBottom: 3,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 7,
  },
  jobTitle: { fontSize: 11, color: MUTED },
  dot: { fontSize: 11, color: ACCENT },
  subtitle: {
    fontSize: 10,
    color: ACCENT,
    fontFamily: "Inter",
    fontWeight: 700,
  },
  summary: { fontSize: 9, color: MUTED, lineHeight: 1.5, marginBottom: 8 },
  contactRow: { flexDirection: "row", gap: 14, flexWrap: "wrap" },
  contactLink: { fontSize: 8, color: ACCENT },
  contactText: { fontSize: 8, color: FAINT },
  section: { marginBottom: 16 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: `0.5pt solid ${BORDER}`,
  },
  sectionAccentBar: {
    width: 3,
    height: 10,
    backgroundColor: ACCENT,
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 7.5,
    fontFamily: "Inter",
    fontWeight: 700,
    color: ACCENT,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  skillRow: { flexDirection: "row", marginBottom: 5, alignItems: "flex-start" },
  skillCategory: {
    fontSize: 8,
    color: ACCENT,
    width: 72,
    fontFamily: "Inter",
    fontWeight: 700,
  },
  skillTagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 4, flex: 1 },
  skillTag: {
    fontSize: 7.5,
    color: ACCENT,
    backgroundColor: TAG_BG,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  projectItem: { marginBottom: 10, paddingLeft: 8 },
  projectItemHighlight: { borderLeft: `2pt solid ${ACCENT}` },
  projectItemNormal: { borderLeft: `1pt solid ${BORDER}` },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  projectName: {
    fontSize: 9,
    fontFamily: "Inter",
    fontWeight: 700,
    color: DARK,
  },
  projectLink: { fontSize: 7.5, color: ACCENT },
  projectDesc: { fontSize: 8, color: MUTED, lineHeight: 1.4, marginBottom: 4 },
  projectTechRow: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
  projectTechTag: {
    fontSize: 7,
    color: ACCENT,
    backgroundColor: TAG_BG,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 8,
    fontFamily: "Inter",
    fontWeight: 700,
  },
  expItem: { marginBottom: 10 },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  expRole: { fontSize: 9, fontFamily: "Inter", fontWeight: 700, color: DARK },
  expCompany: {
    fontSize: 8,
    color: ACCENT,
    marginBottom: 3,
    fontFamily: "Inter",
    fontWeight: 700,
  },
  expPeriod: { fontSize: 7.5, color: FAINT },
  bulletRow: { flexDirection: "row", marginBottom: 1.5 },
  bulletDash: { fontSize: 8, color: ACCENT, marginRight: 4 },
  bulletText: { fontSize: 8, color: MUTED, lineHeight: 1.4, flex: 1 },
  eduItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 7,
  },
  eduDegree: {
    fontSize: 9,
    fontFamily: "Inter",
    fontWeight: 700,
    color: DARK,
    marginBottom: 1,
  },
  eduSchool: {
    fontSize: 8,
    color: ACCENT,
    fontFamily: "Inter",
    fontWeight: 700,
  },
  eduNote: { fontSize: 7.5, color: FAINT, marginTop: 1 },
  eduPeriod: { fontSize: 7.5, color: FAINT },
});

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionAccentBar} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDash}>–</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

export default function CvPdf() {
  const { personal, skills, experience, projects, education } = cvData;

  return (
    <Document title={`${personal.name} – CV`} author={personal.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personal.name}</Text>
          <View style={styles.titleRow}>
            <Text style={styles.jobTitle}>{personal.title}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.subtitle}>{personal.subtitle}</Text>
          </View>
          <Text style={styles.summary}>{personal.summary}</Text>
          <View style={styles.contactRow}>
            <Link src={`mailto:${personal.email}`} style={styles.contactLink}>
              {personal.email}
            </Link>
            <Link
              src={`https://${personal.website}`}
              style={styles.contactLink}
            >
              {personal.website}
            </Link>
            <Link src={`https://${personal.github}`} style={styles.contactLink}>
              {personal.github}
            </Link>
            <Link
              src={`https://${personal.linkedin}`}
              style={styles.contactLink}
            >
              {personal.linkedin}
            </Link>
          </View>
          <Text style={styles.contactText}>{personal.location}</Text>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Skills" />
          {skills.map((group) => (
            <View key={group.category} style={styles.skillRow}>
              <Text style={styles.skillCategory}>{group.category}</Text>
              <View style={styles.skillTagsRow}>
                {group.items.map((skill) => (
                  <Text key={skill} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Projects" />
          {projects.map((project) => (
            <View
              key={project.name}
              style={[
                styles.projectItem,
                project.highlight
                  ? styles.projectItemHighlight
                  : styles.projectItemNormal,
              ]}
            >
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                {project.url && (
                  <Link src={project.url} style={styles.projectLink}>
                    ↗ live
                  </Link>
                )}
              </View>
              <Text style={styles.projectDesc}>{project.description}</Text>
              <View style={styles.projectTechRow}>
                {project.tech.map((t) => (
                  <Text key={t} style={styles.projectTechTag}>
                    {t}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Experience" />
          {experience.map((exp) => (
            <View key={exp.role} style={styles.expItem}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{exp.role}</Text>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.expCompany}>{exp.company}</Text>
              {exp.highlights.map((h) => (
                <Bullet key={h} text={h} />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Education" />
          {education.map((edu) => (
            <View key={edu.degree} style={styles.eduItem}>
              <View>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                <Text style={styles.eduSchool}>{edu.school}</Text>
                {edu.note && <Text style={styles.eduNote}>{edu.note}</Text>}
              </View>
              <Text style={styles.eduPeriod}>{edu.period}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
