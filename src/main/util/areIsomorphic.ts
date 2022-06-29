/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to
 * get t.
 *
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 *
 *
 * Keypoint:
 * iso = 1-1 mapping
 *
 * hashmap is 1 to many by nature
 * it can help us lock domain and check if we map 1 to many from domain to range
 *
 * In addition, hashmap's domain removes the repetitve keys. But, we also want
 * to know all the keys' (including the removed keys) mapping situation. So, we
 * can check the mapping from range back to domain
 *
 *
 */

const areIsomorphic = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false

  const mapSToT: Record<string, string> = {}
  const mapTToS: Record<string, string> = {}

  for (let i = 0; i < s.length; i += 1) {
    // if the mapping doesn't exist, store the mapping
    if (!mapSToT[s[i]]) mapSToT[s[i]] = t[i]
    if (!mapTToS[t[i]]) mapTToS[t[i]] = s[i]

    // if curr target char !== current source char's prev mapping target char
    if (t[i] !== mapSToT[s[i]]) return false
    // if curr source char !== current target char's prev mapping source char
    if (s[i] !== mapTToS[t[i]]) return false
  }

  return true
}

export default areIsomorphic
