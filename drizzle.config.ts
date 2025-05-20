import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema:"./config/schema.tsx",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_FZjvOSI5i0zu@ep-proud-waterfall-a48u53by-pooler.us-east-1.aws.neon.tech/ReadME%20AI?sslmode=require',
    },
    verbose:true,
    strict:true,
})