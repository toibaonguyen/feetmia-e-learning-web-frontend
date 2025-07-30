import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="flex flex-col gap-y-2.5 pb-4 ">
      <Separator/>
      <div className="flex flex-col pr-4 pl-4 lg:pr-12 lg:pl-12">
        <h2 className="md:text-xl font-bold text-primary text-2xl self-center md:self-start">Feetmia</h2>
        <p className="text-foreground hidden md:block">Small steps. Big future.</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-muted-foreground text-sm">© 2025 Feetmia, Inc.</span>

      </div>
    </div>
  )
}
