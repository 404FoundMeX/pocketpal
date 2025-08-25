/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
import nextra from 'nextra'

const withNextra = nextra({
    // ... Add Nextra-specific options here
})

export default withNextra({
    // ... Add regular Next.js options here
    turbopack: {
        resolveAlias: {
            'next-mdx-import-source-file': './src/mdx-components.tsx'
        }
    }
});
