import Container from "./Container";

const Section = ({ title, right, children, className = "" }) => (
  <section className={`py-10 ${className}`}>
    <Container>
      {(title || right) && (
        <div className="mb-6 flex items-end justify-between gap-4">
          {title ? (
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          ) : (
            <span />
          )}
          {right}
        </div>
      )}
      {children}
    </Container>
  </section>
);

export default Section;