"use server";

export async function verifyAdminPassword(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (!adminPassword) {
    // Fallback or just fail securely if env variable is missing
    console.error("ADMIN_PASSWORD environment variable is not set.");
    return false;
  }

  return password === adminPassword;
}
