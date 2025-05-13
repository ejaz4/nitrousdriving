import styles from "./bookingForm.module.css";

export const BookingForm = ({ postcode }: { postcode?: string }) => {
  return (
    <div className={styles.bookingForm}>
      <h2>Book a lesson</h2>
      <p>Fill in the form below to book a lesson with us.</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="postcode">Postcode</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            readOnly={postcode ? true : false}
            defaultValue={postcode ? postcode : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="prefs">Car preference</label>
          <select name="prefs">
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>

        <div>
          <label htmlFor="experience">Your situation</label>
          <select name="experience">
            <option value="noob">I have never driven before</option>
            <option value="lessons">
              I took lessons, but did not complete a test
            </option>
            <option value="veteran">I took lessons and passed a test</option>
          </select>
        </div>

        <div>
          <label htmlFor="test">Have you got a test booked?</label>
          <select name="test">
            <option value="false">No, I do not have a test booked</option>
            <option value="true">Yes, I have a test booked</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <p>
          You&apos;ll need the WhatsApp app installed on your smartphone to
          complete.
        </p>
      </form>
    </div>
  );
};
