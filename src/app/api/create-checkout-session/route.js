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
    tax_rates: ["txr_1NNA4aSFPm4DREWdFNs4pikH"],
    quantity: item.qty,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: transformedItems,
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    mode: "payment",
    customer_email: email,
    success_url: `${process.env.HOST}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
    shipping_options: [
      {
        shipping_rate: "shr_1NMlmVSFPm4DREWd8rmUhZEZ",
      },
    ],
  });

  return NextResponse.json(session);
}
