import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  gap: "3rem",
  width: "100%",
  maxWidth: 1180,
});

export const SkillsContainer = styled("div", {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const SkillsContent = styled("div", {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  fontSize: "40px",
  width: "90%",
});

export const Status = styled("div", {
  fontSize: "1rem",
  color: "$purple ",
  marginTop: "1rem",
});

export const SkillList = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "wrap",
  marginTop: "2rem",
  width: "100%",
});

export const SkillImgs = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "wrap",
  padding: "0 1rem",
});

export const ProjectsContainer = styled("div", {
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});

export const ProjectContent = styled("div", {
  width: "90%",
  margin: "0 auto",
  // minHeight: 656,
  span: {
    width: "100%",
    fontSize: "40px",
    textAlign: "left",
  },
});

export const ProjectsList = styled("div", {
  width: "100%",
  display: " flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "0 1rem",
});

export const Project = styled("div", {
  width: "100%",
  height: 180,
  display: "flex",
  borderRadius: 8,
  cursor: "pointer",
  padding: "0.25rem",
  marginTop: "2rem",

  img: {
    objectFit: "cover",
    borderRadius: 8,
  },
});

export const ProjectDescription = styled("div", {
  display: " flex",
  flexDirection: "column",
  padding: "0.25rem",
  width: "40%",
  height: "180px",
  margin: "0.5rem 0 0 1rem",

  strong: {
    fontSize: "1.5rem",
  },

  span: {
    fontSize: "1rem",
    color: "$subText",
    marginTop: "1rem",
    overflow: "auto",
  },
});

export const ProjectLink = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
});

export const ListOpenSource = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const ItemOpenSource = styled("div", {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",

  span: {
    marginTop: "1rem",
    fontSize: "1.5rem",
  },
});

export const ContactContainer = styled("div", {
  width: "100%",
  height: "200px",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  fontSize: "40px",
});

export const ContactList = styled("div", {
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
});
export const ContactItem = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
  span: {
    marginLeft: "0.625rem",
    fontSize: "1rem",
  },
});
