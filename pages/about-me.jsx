import {
  Box,
  Grid,
  Card,
  CardActions,
  IconButton,
  CardContent,
  Tooltip,
  Typography,
  Avatar,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import styles from "../styles/AboutMe.module.css";
const used = [
  "React",
  "Next.js",
  "Redux(Toolkit)",
  "Material UI & BootstrapV5",
  "React-Hook-Form & yup",
  "React-Toastify",
  "lodash",
  "axios",
];

const AboutUs = () => {
  return (
    <>
      <Box sx={{ margin: "1rem 0" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Card className={styles.aboutMe__card} sx={{ textAlign: "center" }}>
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    This website is built By
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      width: "180px",
                      height: "180px",
                      objectFit: "contain",
                      marginBottom: "15px",
                    }}
                    alt="Pedram"
                    src="https://i.ibb.co/rHmMt6m/photo-2022-07-06-18-34-40.jpg"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="div">
                    Pedram Az
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{ margin: "10px 0 15px", fontWeight: "bold" }}
                  >
                    Project Tech Stack and Utilities :
                  </Typography>
                </Grid>
                <Grid item>
                  <ul className="list-group">
                    {used.map((item) => (
                      <li key={item} className="list-group-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Grid>
                <Grid item sx={{ marginTop: "1rem" }}>
                  <h3 style={{ fontWeight: "bold" }}>Contact Me</h3>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justifyContent="center" alignItems="center">
                <Tooltip title="@iamPedram1" placement="bottom" arrow>
                  <Link href="https://github.com/iamPedram1" target="_blank">
                    <IconButton>
                      <GitHubIcon sx={{ color: "#000" }} />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="@iam_Pedram1" placement="bottom" arrow>
                  <Link
                    href="https://www.instagram.com/iam_Pedram1"
                    target="_blank"
                  >
                    <IconButton>
                      <InstagramIcon sx={{ color: "#C63177" }} />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="+9927459082" placement="bottom" arrow>
                  <Link
                    href="https://web.whatsapp.com/send?phone=989927459082"
                    target="_blank"
                  >
                    <IconButton>
                      <WhatsAppIcon sx={{ color: "green" }} />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip
                  title="ID: @iam_Pedram1 | Num: +9927459082"
                  placement="bottom"
                  arrow
                >
                  <Link href="tg://resolve?domain=iam_Pedram1" target="_blank">
                    <IconButton>
                      <TelegramIcon sx={{ color: "#2DA3D5" }} />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
