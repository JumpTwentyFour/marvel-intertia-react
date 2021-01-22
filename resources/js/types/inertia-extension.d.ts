declare module '@inertiajs/inertia' {
  namespace Inertia {
    interface PageProps extends PageProps {
      errors: Record<string, string>
    }
  }
}

export const Inertia: Inertia
