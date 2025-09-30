import Section from "../basicComponents/Section";
import Container from "../basicComponents/Container";
import Button from "../basicComponents/Button";

const Newsletter = () => (
  <Section className="py-14">
    <Container>
      <div className="rounded-2xl bg-black p-8 text-white md:p-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-wide text-gray-300">Exclusive</div>
            <h3 className="mt-1 text-2xl font-semibold">Subscribe</h3>
            <p className="mt-2 text-sm text-gray-300">Get 10% off your first order</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="flex w-full max-w-md items-center gap-2">
            <div className="relative flex-1">
              <input type="email" required placeholder="Enter your email" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus:bg-white/15" />
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/></svg>
            </div>
            <Button variant="dark">Subscribe</Button>
          </form>
        </div>
      </div>
    </Container>
  </Section>
);

export default Newsletter;