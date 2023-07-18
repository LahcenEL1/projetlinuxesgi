
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import config from '../style/config';
import Link from "@mui/material/Link";

function Footer() {
	let location = useLocation()
	// if (location.pathname.includes("login")) return null
	return (
		<Box
			id="footer"
			sx={{
				background: config.mainColor, 
				height: '12em', 
				borderTop: '2px solid #FFFF', 
				borderRaduis: '0px',
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
			}}
			component="footer"
		>
			<Box
				m={2}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: 'end',
					color: 'white',
					width: '40%',
					pt: '1em'
				}}
			>
				<Link
					href="LIEN VERS LE SWAGGER"
					underline="none"
					target="_blank"
				>
					<img
						src={config.logo}
						style={{ width: "3em", height: "3em" }}
						alt="logo"
					/>
				</Link>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "end",
					alignItems: 'start',
					color: 'black',
					width: '50%',
				}}
				component="span"
			>
				<Typography
					gutterBottom
				>
					©2023 Certified by TEAM PURE
				</Typography>
				<Typography
				>
					All intellectual property rights reserved
				</Typography>
			</Box>
		</Box>
	)
}

export default Footer;