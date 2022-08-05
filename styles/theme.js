import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: (props) => ({
			body: {
				margin: 0,
				padding: 0,
				minHeight: "100vh",
				color: "black",
				background:
					"linear-gradient(308deg, #0ce9b0, #962cb8);"
			},
			a: {
				color: "violet",
			},
		}),
	},
});

export default theme;