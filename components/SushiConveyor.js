'use client';

export default function SushiConveyor() {
  const featureCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1400&auto=format&fit=crop",
      title: "Find Like Minded Workout Buddies",
      alt: "Workout buddies"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
      title: "Make New Friends At Your Local Bar",
      alt: "Friends hanging out together"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop",
      title: "Seek Marketing Internships",
      alt: "Internships"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
      title: "Join Study Groups & Book Clubs",
      alt: "Study groups"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1400&auto=format&fit=crop",
      title: "Network at Tech Meetups",
      alt: "Tech networking"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=1400&auto=format&fit=crop",
      title: "Find Travel Companions",
      alt: "Travel buddies"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop",
      title: "Connect with Food Enthusiasts",
      alt: "Food lovers"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1400&auto=format&fit=crop",
      title: "Join Creative Workshops",
      alt: "Creative workshops"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1400&auto=format&fit=crop",
      title: "Find Sports Partners",
      alt: "Sports activities"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop",
      title: "Connect with Musicians",
      alt: "Music collaboration"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
      title: "Find Gaming Communities",
      alt: "Gaming groups"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1400&auto=format&fit=crop",
      title: "Join Photography Walks",
      alt: "Photography enthusiasts"
    }
  ];

  // Duplicate the cards for seamless looping
  const duplicatedCards = [...featureCards, ...featureCards];

  return (
    <div className="sushi-conveyor">
      <div className="conveyor-track">
        {duplicatedCards.map((card, index) => (
          <article key={`${card.id}-${index}`} className="sushi-card">
            <div className="imgwrap">
              <img src={card.image} alt={card.alt} />
            </div>
            <div className="body">
              <h3>{card.title}</h3>
              <button className="btn-mini">Explore</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}