import Container from "./Container";

const Section = ({ children, className = "" }) => (
  <section className={`py-10 ${className}`}>
    <Container>
      {children}
    </Container>
  </section>
);

export default Section;