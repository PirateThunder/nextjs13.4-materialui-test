"use client";
import { Button, Grid, Stack } from "@mui/material";
export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1>Using Material UI with Next.js 13</h1>
      <a href="https://levelup.gitconnected.com/using-material-ui-with-next-js-13-and-tailwind-css-41c201855dcf" target="_blank">
        More...
      </a>
      <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button onClick={() => alert('work')} variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
}