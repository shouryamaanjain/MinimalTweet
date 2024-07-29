export function SiteFooter() {
  return (
    <footer className="fixed bottom-6 left-8">
      <p className="text-balance text-center text-xs leading-loose text-muted-foreground md:text-left">
        Built with ❤️ by{" "}
        <a
          href={"https://shouryamaanjain.com"}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Shouryamaan Jain
        </a>
        . Connect with me on{" "}
        <a
          href={"https://x.com/shouryamaanjain"}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Twitter
        </a>
        .
      </p>
    </footer>
  )
}
