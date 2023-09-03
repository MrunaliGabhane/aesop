import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.second}>
        <div className={styles.one}>
          <h2>Subscribe to Aesop communications</h2>
          <hr />
          <input
            className={styles.intemail}
            placeholder="Email address"
            type="email"
            value=""
          />{" "}
          <br />
          <input type="checkbox" /> Subscribe to receive communications from
          Aesop. By subscribing, you confirm you have read and understood our{" "}
          <a href=""> privacy policy.</a>
        </div>

        <div className={styles.two}>
          <h2>Orders and support</h2>
          <hr />
          <br />
          <p>Contact us </p>
          <p>FAQs </p>
          <p>Shipping </p>
          <p>Returns </p>
          <p>Order history</p>
          <p>Terms and conditions</p>
        </div>

        <div className={styles.three}>
          <h2>Services</h2>
          <hr />
          <p>Live assistance</p>
          <p>Corporate gifts</p>
          <p>Facial Appointments</p>
          <p>Click and Collect</p>
          <p>Video consultation</p>
        </div>

        <div className={styles.four}>
          <h2>Location preferences</h2>
          <hr />
          <p>Shipping:</p>
          <a href="">Hong Kong SAR, China</a>
          <p>Language:</p>
          <a href="">English</a> <br />
          <a href="">繁體中文</a>
        </div>
      </div>

      <div className={styles.seconddiv}>
        <div className={styles.new}>
          <div className={styles.five}>
            <h2>Sustainability</h2>
            <hr />
            <p>
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </p>
          </div>

          <div className={styles.six}>
            <h2>About</h2>
            <hr />
            <p>Our story</p>
            <p>Foundation</p>
            <p>Careers</p>
            <p>Privacy policy</p>
            <p>Accessibility</p>
            <p>Cookie Policy</p>
          </div>

          <div className={styles.seven}>
            <h2>Social media</h2>
            <hr />
            <p>Instagram </p>
            <p>Twitter </p>
            <p>LinkedIn </p>
            <p>WeChat</p>
            <p>Weibo </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
