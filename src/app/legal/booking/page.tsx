import Link from "next/link";

const BookingTerms = () => {
  return (
    <div
      className="contentSpan"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
      }}
    >
      <h1>Booking and Cancellation Policy</h1>
      <p>
        Booking a driving lesson through us via WhatsApp or any of our
        officially endorsed social media routes is subject to our Booking and
        Cancellation Policy.
      </p>
      <h2>Booking Terms</h2>
      <p>
        You (the customer, buyer or learner) can book a lesson through Nitrous
        Driving School as long as you follow the requirements.
      </p>
      <p>
        When you book you must make sure that the learner is qualified to take
        lessons which includes them holding a provisional or full UK driving
        licence that was issued by DVSA and not any other private entity.
      </p>
      <p>
        You must make sure that the learner is in on of our service areas or can
        commute to a service area to take lessons. You can{" "}
        <Link href={"/locate/check"}>check your location</Link> on Nitrous
        Driving School, asking an official instructor or an instructor may be
        able to offer alternatives in some instances.
      </p>

      <h2>Cancellation Terms</h2>
      <p>
        You reserve the right to cancel up until 24 hours before your lesson.
      </p>
      <p>
        You must inform your instructor of a cancellation, absence or no-show.
      </p>
      <h3>If you cancel within the time period</h3>
      <p>
        If you do wish to cancel, you must inform your instructor of the
        cancellation as soon as practical.
      </p>
      <p>If payment has already taken place, this will be returned you.</p>

      <h3>If you cancel within the 24 hours before your lesson</h3>
      <p>
        If you do wish to cancel, you must inform your instructor of the
        cancellation as soon as practical.
      </p>
      <p>Payment will not be returned to you to cover the gap in scheduling.</p>
    </div>
  );
};

export default BookingTerms;
