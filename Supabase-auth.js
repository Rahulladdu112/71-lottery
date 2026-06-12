<script type="module">
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_PUBLISHABLE_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

// Send OTP
async function sendOTP() {
  const email = document.getElementById("email").value;

  const { error } = await supabase.auth.signInWithOtp({
    email: email
  });

  if (error) {
    alert(error.message);
  } else {
    alert("OTP sent to your email");
  }
}

// Verify OTP
async function verifyOTP() {
  const email = document.getElementById("email").value;
  const otp = document.getElementById("otp").value;

  const { error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: "email"
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Login successful");
    window.location.href = "home.html";
  }
}

window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;
</script>
