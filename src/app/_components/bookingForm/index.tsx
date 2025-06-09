import WhatsAppLogo from "../logos/whatsapp";
import styles from "./bookingForm.module.css";

export const BookingForm = ({ postcode }: { postcode?: string }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      postcode: formData.get("postcode"),
      prefs: formData.get("prefs"),
      experience: formData.get("experience"),
      test: formData.get("test"),
    };

    let messageFormatted = `Hi, I want to enquire.\nName: ${
      data.name
    }\nPostcode: ${data.postcode}\nCar preference: ${
      data.prefs
    }\nYour situation: ${
      data.experience == "noob"
        ? "No lessons taken before"
        : data.experience == "lessons"
        ? "Lessons taken, but no test booked"
        : "Lessons taken and practical test passed"
    }\nHave you got a test booked?: ${data.test == "true" ? "yes" : "no"}`;

    const waURL = new URL(
      `https://wa.me/447985556566?text=${encodeURIComponent(messageFormatted)}`
    );
    window.open(waURL, "_blank");
    console.log(messageFormatted);
  };

  return (
    <div className={styles.bookingForm}>
      <p>Fill in the form below to book a lesson with us.</p>
      <form onSubmit={onSubmit}>
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
        <p>
          You can cancel your booking up until 24 hours before the lesson
          scheduled time.
        </p>
        <button type="submit">
          <WhatsAppLogo />
          <p>Submit</p>
        </button>
        <p>
          You&apos;ll need the WhatsApp app installed on your smartphone to
          complete.
        </p>
      </form>
    </div>
  );
};
