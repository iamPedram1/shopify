import { Box, Grid, Tooltip, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/Github";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "450px",
          paddingTop: "5rem",
          backgroundColor: "#222222",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ marginBottom: "3rem" }}
        >
          <Grid item>
            <h4 style={{ color: "#fff", fontWeight: "bold" }}>Shopfiy</h4>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Link href="/">
              <a className={styles.footer__links} href="">
                Home
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/wishlist">
              <a className={styles.footer__links} href="">
                Wishlist
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Link href="about-me">
              <a className={styles.footer__links} href="">
                About Me
              </a>
            </Link>
          </Grid>
        </Grid>
        <Grid
          sx={{ marginTop: "3rem" }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Tooltip title="@iamPedram1" placement="bottom" arrow>
            <Link href="https://github.com/iamPedram1" passHref>
              <a target="_blank">
                <IconButton>
                  <GitHubIcon sx={{ color: "#fff" }} />
                </IconButton>
              </a>
            </Link>
          </Tooltip>
          <Tooltip title="@iam_Pedram1" placement="bottom" arrow>
            <Link href="https://www.instagram.com/iam_Pedram1" passHref>
              <a target="_blank">
                <IconButton>
                  <InstagramIcon sx={{ color: "#C63177" }} />
                </IconButton>
              </a>
            </Link>
          </Tooltip>
          <Tooltip title="+9927459082" placement="bottom" arrow>
            <Link
              href="https://web.whatsapp.com/send?phone=989927459082"
              passHref
            >
              <a target="_blank">
                <IconButton>
                  <WhatsAppIcon sx={{ color: "green" }} />
                </IconButton>
              </a>
            </Link>
          </Tooltip>
          <Tooltip
            title="ID: @iam_Pedram1 | Num: +9927459082"
            placement="bottom"
            arrow
          >
            <Link href="tg://resolve?domain=iam_Pedram1" passHref>
              <a target="_blank">
                <IconButton>
                  <TelegramIcon sx={{ color: "#2DA3D5" }} />
                </IconButton>
              </a>
            </Link>
          </Tooltip>
        </Grid>
        <Grid
          sx={{ paddingTop: "3rem" }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <h5 style={{ color: "#fff", fontWeight: "bold" }}>
              Copyright © 2022 - Shopify
            </h5>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
