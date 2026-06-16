-- Individual customer profiles (linked to Supabase Auth)
create table if not exists customer_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  created_at timestamptz default now()
);

-- Retail orders from Stripe Checkout
create table if not exists retail_orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references auth.users(id) on delete set null,
  stripe_session_id text unique,
  stripe_payment_intent_id text,
  email text not null,
  items jsonb not null,
  subtotal numeric not null,
  total numeric not null,
  status text default 'paid',
  shipping_address jsonb,
  created_at timestamptz default now()
);

alter table customer_profiles enable row level security;
alter table retail_orders enable row level security;

create policy "Users can view own profile"
  on customer_profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on customer_profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on customer_profiles for insert
  with check (auth.uid() = id);

create policy "Users can view own orders"
  on retail_orders for select
  using (auth.uid() = customer_id or email = auth.jwt() ->> 'email');
