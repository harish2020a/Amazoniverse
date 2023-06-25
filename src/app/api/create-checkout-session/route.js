import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);
  const { items, email } = await req.json();
  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.title,
        images: [item.image],
        description: item.description,
      },
      unit_amount: (item.price * 100).toFixed(0),
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: transformedItems,
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  return NextResponse.json({ id: session.id });
}
