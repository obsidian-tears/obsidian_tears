export const idlFactory = ({ IDL }) => {
  const TokenIndex = IDL.Nat32;
  const ApiError = IDL.Variant({
    'Limit' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Text,
  });
  const ApiResponse_2 = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Nat8),
    'Err' : ApiError,
  });
  const ApiResponse_3 = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : ApiError });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const HttpStreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'sha256' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const HttpStreamingCallbackResponse = IDL.Record({
    'token' : IDL.Opt(HttpStreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const HttpStreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : HttpStreamingCallbackToken,
      'callback' : IDL.Func(
          [HttpStreamingCallbackToken],
          [HttpStreamingCallbackResponse],
          ['query'],
        ),
    }),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(HttpStreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const ApiResponse_1 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : ApiError });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : ApiError });
  const ApiResponse = IDL.Variant({
    'Ok' : IDL.Vec(TokenIndex),
    'Err' : ApiError,
  });
  const ObsidianTearsRpg = IDL.Service({
    'acceptCycles' : IDL.Func([], [], ['oneway']),
    'adminKillHeartbeat' : IDL.Func([], [], []),
    'adminStartHeartbeat' : IDL.Func([], [], []),
    'balance' : IDL.Func([], [IDL.Nat], ['query']),
    'buyItem' : IDL.Func([TokenIndex, IDL.Vec(IDL.Nat8)], [ApiResponse_2], []),
    'checkIn' : IDL.Func([], [], []),
    'defeatMonster' : IDL.Func([TokenIndex, TokenIndex], [ApiResponse_3], []),
    'equipItems' : IDL.Func(
        [TokenIndex, IDL.Vec(TokenIndex)],
        [ApiResponse_3],
        [],
      ),
    'getEquippedItems' : IDL.Func([TokenIndex], [IDL.Vec(TokenIndex)], []),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'isHeartbeatRunning' : IDL.Func([], [IDL.Bool], ['query']),
    'loadGame' : IDL.Func([TokenIndex], [ApiResponse_1], []),
    'openChest' : IDL.Func([TokenIndex], [ApiResponse_2], []),
    'saveGame' : IDL.Func([TokenIndex, IDL.Text], [ApiResponse_1], []),
    'setMinter' : IDL.Func([IDL.Principal], [Result], []),
    'verify' : IDL.Func([], [ApiResponse], []),
  });
  return ObsidianTearsRpg;
};
export const init = ({ IDL }) => { return []; };
