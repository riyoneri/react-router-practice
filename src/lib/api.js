export async function getAllQuotes() {
  const response = await fetch(`/quotes`);
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }   

  return data.quotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`/quotes/${quoteId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  return data.quote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`/quotes/add`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`/add-comment/${requestData.quoteId}`, {
    method: 'POST',
    body: JSON.stringify({
      text: requestData.commentData
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`/comments/${quoteId}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  return data.comments;
}
