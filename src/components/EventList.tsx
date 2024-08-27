import EventCard from "./EventCard";

export default function EventList() {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-5/6 mb-10">
      <EventCard
        title="ARE WE ALONE ?"
        description={
          <>
            For the first time, the Biotechnology Department presents a "Dark
            Theme" event. Dive into a world of suspense exploring the unknown,
            from life beyond Earth to bioluminescent creatures. Engage in
            discussions and puzzles that blur the lines between science and the
            supernatural. Are we truly alone, or is there something lurking just
            beyond our perception?
          </>
        }
        imgSrc="/arewealone.png"
      />
      <EventCard
        title="JUMANJI: INTO THE WILDERNESS"
        description={
          <>
            Welcome to Jumanji!! Embark on an adventure into the wild where
            nature and science collide in a whirlwind of fun and discovery. Dive
            into a series of exciting games that immerse you in the wonders of
            plant life and evolution. Uncover the secrets of plant chemistry,
            explore the mysteries of sustainable forestry, and marvel at the
            latest biotech innovations. Join us for an unforgettable experience
            filled with thrilling, interactive activities and unforgettable fun!
          </>
        }
        imgSrc="/jumanji.png"
      />
      <EventCard
        title="CYTOKINE CRUSADERS"
        description={
          <>
            <p>
              The Cytokine Crusaders invite you to embark on a thrilling journey
              through the intricate world of immunology. Discover how your
              body's defense mechanisms work to protect you from diseases.
              Through engaging activities, and interactive models, we'll explore
              the fascinating world of antibodies, white blood cells, and other
              immune defenders. Discover how your body fights off infections and
              stays healthy.
            </p>

            <p>
              Whether you're curious about allergies, autoimmune diseases, or
              simply want to learn how to stay healthy, this sub-event offers
              something for everyone. Come join us and discover the amazing
              power of your immune system!
            </p>
          </>
        }
        imgSrc="/cytokine.png"
      />
      <EventCard
        title="AQUASHELLA SURFERS"
        description={
          <>
            <p>
              Dive into the depths of marine exploration at AquaShella Surfers,
              a dynamic symposium dedicated to the wonders of ocean biology.
              This event brings students together for an engaging day of
              competitions, discussions, and fun centered around marine
              ecosystems. Join us for an opportunity to learn about the latest
              advancements in marine science, network with experts in the field.
              Whether you're passionate about marine biology or just curious
              about the ocean, AquaShella Surfers offers an enriching experience
              for all.
            </p>
          </>
        }
        imgSrc="/aquashell.png"
      />
      <EventCard
        title="EPICUREAN ENGINEERS"
        description={
          <>
            <p>
              Join us on the flavor revolution, The food technology symposium is
              an eventual experience for anyone passionate and curious about the
              future of food. Come delve with us in the new world of advanced
              level of food techniques and modern biotechnology. Let's charge
              the event with more excitement and laughter where food meets fun
              and science meets delight
              <ul>
                <li>sustainable food products</li>
                <li>
                  innovative food products and models
                  <ol>
                    <li>molecular gastronomy</li>
                    <li>lab grown meat</li>
                  </ol>
                </li>
                <li>epicureans is all about people who crave for food</li>
                <li>food = emotion ✨</li>
              </ul>
              *so we eagerly waiting for all the epicureans to join our event (
              epicurean engineers )
            </p>
          </>
        }
        imgSrc="/epeicurean.png"
      />
    </div>
  );
}
