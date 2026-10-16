import { NextResponse } from "next/server";

interface QuoteRequestBody {
  fullName: string;
  companyName?: string;
  phone: string;
  email?: string;
  pickupLocation: string;
  deliveryLocation: string;
  shipmentDetails: string;
  additionalMessage?: string;
}

export async function POST(request: Request) {
  try {
    const body: QuoteRequestBody = await request.json();

    const {
      fullName,
      companyName = "",
      phone,
      email = "",
      pickupLocation,
      deliveryLocation,
      shipmentDetails,
      additionalMessage = "",
    } = body;

    // Strict validation
    const errors: Record<string, string> = {};

    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Full name is required (at least 2 characters).";
    }

    // Phone validation (accepts 10 digits or international formats)
    const cleanPhone = phone ? phone.replace(/[\s\-\(\)\+]/g, "") : "";
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "A valid phone number (at least 10 digits) is required.";
    }

    if (!pickupLocation || pickupLocation.trim().length < 2) {
      errors.pickupLocation = "Pickup city or location is required.";
    }

    if (!deliveryLocation || deliveryLocation.trim().length < 2) {
      errors.deliveryLocation = "Delivery destination is required.";
    }

    if (!shipmentDetails || shipmentDetails.trim().length < 2) {
      errors.shipmentDetails = "Shipment details or cargo type are required.";
    }

    if (email && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form.",
          errors,
        },
        { status: 400 }
      );
    }

    // Generate unique inquiry reference
    const referenceId = `TLS-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // Note: Backend integration hook.
    // In production with CRM or SMTP credentials configured (e.g., SendGrid, Nodemailer, Resend),
    // an email or webhook would be triggered here.
    // Safe operational logging without exposing user PII in raw server logs (GDPR & privacy safe)
    const maskedPhone = cleanPhone.length >= 4
      ? `${"*".repeat(cleanPhone.length - 4)}${cleanPhone.slice(-4)}`
      : "****";

    console.info(`[TLS Quote Lead Processed] Ref: ${referenceId}`, {
      referenceId,
      phoneMasked: maskedPhone,
      hasEmail: Boolean(email && email.trim()),
      hasCompany: Boolean(companyName && companyName.trim()),
      pickupLocation: pickupLocation.trim(),
      deliveryLocation: deliveryLocation.trim(),
      shipmentDetailsLength: shipmentDetails.trim().length,
      hasAdditionalNotes: Boolean(additionalMessage && additionalMessage.trim()),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      referenceId,
      hasActiveBackend: false,
      message:
        "Enquiry validation passed. Note: Automated backend database/email transmission is not configured in this preview environment. Please dispatch via WhatsApp for real-world handling.",
    });
  } catch (error) {
    console.error("[TLS Quote Submission Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred while processing your quote request. Please try again or use direct WhatsApp.",
      },
      { status: 500 }
    );
  }
}
