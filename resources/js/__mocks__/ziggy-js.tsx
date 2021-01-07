export default function route(name: string): { url: () => string } {
  return {
    url: function() {
      return name
    },
  }
}
