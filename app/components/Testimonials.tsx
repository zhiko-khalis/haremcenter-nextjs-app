import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Zhiko Khalls",
      role: "Developer",
      rating: 5,
      text: "Absolutely love my new extensions! The team at Harem Center are true professionals. My hair looks and feels amazing, and I've received so many compliments.",
      initials: "ZK"
    },
    {
      name: "Hayman Homer",
      role: "Actor, Producer",
      rating: 5,
      text: "I've tried extensions before, but nothing compares to the quality and service here. The extensions blend perfectly with my natural hair. Highly recommended!",
      initials: "HH"
    },
    {
      name: "Najat Abdullah",
      role: "Producer",
      rating: 5,
      text: "The best investment I've made in myself! The consultation was thorough, and they matched my hair perfectly. Three months in and they still look incredible.",
      initials: "NA"
    },
    {
      name: "Amanda Williams",
      role: "Real Estate Agent",
      rating: 5,
      text: "Professional, friendly, and talented! They took the time to understand what I wanted and delivered beyond my expectations. My hair has never looked better!",
      initials: "AW"
    },
    {
      name: "Rachel Martinez",
      role: "Teacher",
      rating: 5,
      text: "I was nervous about getting extensions, but the team made me feel so comfortable. The results are stunning and completely natural-looking. Worth every penny!",
      initials: "RM"
    },
    {
      name: "Lauren Thompson",
      role: "Yoga Instructor",
      rating: 5,
      text: "These extensions have given me so much confidence! They're easy to maintain and look so natural that even my closest friends couldn't tell. Thank you Harem Center!",
      initials: "LT"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-primary">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p>{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-2">5000+</div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-2">4.9★</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-2">98%</div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
