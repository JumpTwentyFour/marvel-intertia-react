declare module '@inertiajs/inertia' {
  type Flash = {
    message: string
    type: string
  }

  namespace Inertia {
    interface PageProps extends PageProps {
      authenticated: boolean
      errors: Record<string, string>
      flash: Flash
    }
  }
}

export const Inertia: Inertia
