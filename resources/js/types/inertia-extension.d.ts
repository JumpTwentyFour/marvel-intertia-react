declare module '@inertiajs/inertia' {
  namespace Inertia {
    interface PageProps extends PageProps {
      authenticated: boolean
      errors: Record<string, string>
    }
  }
}

export const Inertia: Inertia
