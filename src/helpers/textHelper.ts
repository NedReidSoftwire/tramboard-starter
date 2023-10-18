export const nameToSlug = (name: string) => {
  let slug: string = name.toLowerCase()
  slug = name.replaceAll(' ', '-')
  return slug
}
