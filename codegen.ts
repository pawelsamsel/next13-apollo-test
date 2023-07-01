import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./src/api/rmApi/_generated/": {
      schema: "https://rickandmortyapi.com/graphql",
      documents: ["./src/api/rmApi/**/*.ts"],
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
      config: {
        defaultBaseOptions: {
          context: { clientName: "rmApi" },
        },
      },
    },
  },
};

export default config;
