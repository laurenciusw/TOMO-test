import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head"; // Impor Head dari next/head
import "./global.css"; // Sesuaikan dengan lokasi file gaya global Anda

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ROH</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Component {...pageProps} />

          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
