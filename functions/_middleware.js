export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.pathname !== "/") {
    return next();
  }

  const cookieHeader = request.headers.get("cookie") || "";
  const hasLangPref = /(?:^|;\s*)bikabu_lang=/.test(cookieHeader);

  if (hasLangPref) {
    return next();
  }

  const country = request.headers.get("cf-ipcountry") || "";

  if (country && country !== "ID" && country !== "XX" && country !== "T1") {
    const response = Response.redirect(new URL("/en", url), 302);
    response.headers.append(
      "Set-Cookie",
      "bikabu_lang=en; Path=/; Max-Age=31536000; SameSite=Lax"
    );
    return response;
  }

  const response = await next();
  const cloned = new Response(response.body, response);
  cloned.headers.append(
    "Set-Cookie",
    "bikabu_lang=id; Path=/; Max-Age=31536000; SameSite=Lax"
  );
  return cloned;
}
