Search.setIndex({envversion:46,filenames:["grpc","grpc.beta","grpc.early_adopter","grpc.framework","grpc.framework.alpha","grpc.framework.base","grpc.framework.common","grpc.framework.core","grpc.framework.crust","grpc.framework.face","grpc.framework.foundation","grpc.framework.interfaces","grpc.framework.interfaces.base","grpc.framework.interfaces.face","grpc.framework.interfaces.links","index"],objects:{"":{grpc:[0,0,0,"-"]},"grpc.beta":{implementations:[1,0,0,"-"],interfaces:[1,0,0,"-"],utilities:[1,0,0,"-"]},"grpc.beta.implementations":{CallCredentials:[1,1,1,""],Channel:[1,1,1,""],ChannelCredentials:[1,1,1,""],ServerCredentials:[1,1,1,""],ServerOptions:[1,1,1,""],StubOptions:[1,1,1,""],composite_call_credentials:[1,3,1,""],composite_channel_credentials:[1,3,1,""],dynamic_stub:[1,3,1,""],generic_stub:[1,3,1,""],insecure_channel:[1,3,1,""],metadata_call_credentials:[1,3,1,""],secure_channel:[1,3,1,""],server:[1,3,1,""],server_options:[1,3,1,""],ssl_channel_credentials:[1,3,1,""],ssl_server_credentials:[1,3,1,""],stub_options:[1,3,1,""]},"grpc.beta.implementations.Channel":{subscribe:[1,2,1,""],unsubscribe:[1,2,1,""]},"grpc.beta.interfaces":{ChannelConnectivity:[1,1,1,""],GRPCAuthMetadataContext:[1,1,1,""],GRPCAuthMetadataPlugin:[1,1,1,""],GRPCAuthMetadataPluginCallback:[1,1,1,""],GRPCCallOptions:[1,1,1,""],GRPCInvocationContext:[1,1,1,""],GRPCServicerContext:[1,1,1,""],Server:[1,1,1,""],StatusCode:[1,1,1,""],grpc_call_options:[1,3,1,""]},"grpc.beta.interfaces.ChannelConnectivity":{CONNECTING:[1,4,1,""],FATAL_FAILURE:[1,4,1,""],IDLE:[1,4,1,""],READY:[1,4,1,""],TRANSIENT_FAILURE:[1,4,1,""]},"grpc.beta.interfaces.GRPCAuthMetadataContext":{method_name:[1,4,1,""],service_url:[1,4,1,""]},"grpc.beta.interfaces.GRPCInvocationContext":{disable_next_request_compression:[1,2,1,""]},"grpc.beta.interfaces.GRPCServicerContext":{disable_next_response_compression:[1,2,1,""],peer:[1,2,1,""]},"grpc.beta.interfaces.Server":{add_insecure_port:[1,2,1,""],add_secure_port:[1,2,1,""],start:[1,2,1,""],stop:[1,2,1,""]},"grpc.beta.interfaces.StatusCode":{ABORTED:[1,4,1,""],ALREADY_EXISTS:[1,4,1,""],CANCELLED:[1,4,1,""],DATA_LOSS:[1,4,1,""],DEADLINE_EXCEEDED:[1,4,1,""],FAILED_PRECONDITION:[1,4,1,""],INTERNAL:[1,4,1,""],INVALID_ARGUMENT:[1,4,1,""],NOT_FOUND:[1,4,1,""],OK:[1,4,1,""],OUT_OF_RANGE:[1,4,1,""],PERMISSION_DENIED:[1,4,1,""],RESOURCE_EXHAUSTED:[1,4,1,""],UNAUTHENTICATED:[1,4,1,""],UNAVAILABLE:[1,4,1,""],UNIMPLEMENTED:[1,4,1,""],UNKNOWN:[1,4,1,""]},"grpc.beta.utilities":{channel_ready_future:[1,3,1,""]},"grpc.early_adopter":{implementations:[2,0,0,"-"]},"grpc.early_adopter.implementations":{server:[2,3,1,""],stub:[2,3,1,""]},"grpc.framework":{alpha:[4,0,0,"-"],base:[5,0,0,"-"],common:[6,0,0,"-"],core:[7,0,0,"-"],crust:[8,0,0,"-"],face:[9,0,0,"-"],foundation:[10,0,0,"-"],interfaces:[11,0,0,"-"]},"grpc.framework.alpha":{exceptions:[4,0,0,"-"],interfaces:[4,0,0,"-"],utilities:[4,0,0,"-"]},"grpc.framework.alpha.exceptions":{CancellationError:[4,5,1,""],ExpirationError:[4,5,1,""],RpcError:[4,5,1,""]},"grpc.framework.alpha.interfaces":{Abortion:[4,1,1,""],CancellableIterator:[4,1,1,""],Cardinality:[4,1,1,""],RpcContext:[4,1,1,""],RpcMethodDescription:[4,1,1,""],RpcMethodInvocationDescription:[4,1,1,""],RpcMethodServiceDescription:[4,1,1,""],Server:[4,1,1,""],StreamUnarySyncAsync:[4,1,1,""],Stub:[4,1,1,""],UnaryUnarySyncAsync:[4,1,1,""]},"grpc.framework.alpha.interfaces.Abortion":{CANCELLED:[4,4,1,""],EXPIRED:[4,4,1,""],NETWORK_FAILURE:[4,4,1,""],SERVICED_FAILURE:[4,4,1,""],SERVICER_FAILURE:[4,4,1,""]},"grpc.framework.alpha.interfaces.CancellableIterator":{cancel:[4,2,1,""],next:[4,2,1,""]},"grpc.framework.alpha.interfaces.Cardinality":{STREAM_STREAM:[4,4,1,""],STREAM_UNARY:[4,4,1,""],UNARY_STREAM:[4,4,1,""],UNARY_UNARY:[4,4,1,""]},"grpc.framework.alpha.interfaces.RpcContext":{add_abortion_callback:[4,2,1,""],is_active:[4,2,1,""],time_remaining:[4,2,1,""]},"grpc.framework.alpha.interfaces.RpcMethodDescription":{cardinality:[4,2,1,""]},"grpc.framework.alpha.interfaces.RpcMethodInvocationDescription":{deserialize_response:[4,2,1,""],serialize_request:[4,2,1,""]},"grpc.framework.alpha.interfaces.RpcMethodServiceDescription":{deserialize_request:[4,2,1,""],serialize_response:[4,2,1,""],service_stream_stream:[4,2,1,""],service_stream_unary:[4,2,1,""],service_unary_stream:[4,2,1,""],service_unary_unary:[4,2,1,""]},"grpc.framework.alpha.interfaces.Server":{port:[4,2,1,""]},"grpc.framework.alpha.interfaces.StreamUnarySyncAsync":{async:[4,2,1,""]},"grpc.framework.alpha.interfaces.UnaryUnarySyncAsync":{async:[4,2,1,""]},"grpc.framework.alpha.utilities":{stream_stream_invocation_description:[4,3,1,""],stream_stream_service_description:[4,3,1,""],stream_unary_invocation_description:[4,3,1,""],stream_unary_service_description:[4,3,1,""],unary_stream_invocation_description:[4,3,1,""],unary_stream_service_description:[4,3,1,""],unary_unary_invocation_description:[4,3,1,""],unary_unary_service_description:[4,3,1,""]},"grpc.framework.base":{"null":[5,0,0,"-"],exceptions:[5,0,0,"-"],implementations:[5,0,0,"-"],in_memory:[5,0,0,"-"],interfaces:[5,0,0,"-"],util:[5,0,0,"-"]},"grpc.framework.base.exceptions":{NoSuchMethodError:[5,5,1,""]},"grpc.framework.base.implementations":{back_link:[5,3,1,""],front_link:[5,3,1,""]},"grpc.framework.base.in_memory":{Link:[5,1,1,""]},"grpc.framework.base.in_memory.Link":{accept_back_to_front_ticket:[5,2,1,""],accept_front_to_back_ticket:[5,2,1,""],join_fore_link:[5,2,1,""],join_rear_link:[5,2,1,""]},"grpc.framework.base.interfaces":{Back:[5,1,1,""],BackLink:[5,1,1,""],BackToFrontTicket:[5,1,1,""],End:[5,1,1,""],ForeLink:[5,1,1,""],Front:[5,1,1,""],FrontLink:[5,1,1,""],FrontToBackTicket:[5,1,1,""],Operation:[5,1,1,""],OperationContext:[5,1,1,""],Outcome:[5,1,1,""],RearLink:[5,1,1,""],ServicedIngestor:[5,1,1,""],ServicedSubscription:[5,1,1,""],Servicer:[5,1,1,""]},"grpc.framework.base.interfaces.BackToFrontTicket":{Kind:[5,1,1,""],kind:[5,4,1,""],operation_id:[5,4,1,""],payload:[5,4,1,""],sequence_number:[5,4,1,""]},"grpc.framework.base.interfaces.BackToFrontTicket.Kind":{CANCELLATION:[5,4,1,""],COMPLETION:[5,4,1,""],CONTINUATION:[5,4,1,""],EXPIRATION:[5,4,1,""],RECEPTION_FAILURE:[5,4,1,""],SERVICED_FAILURE:[5,4,1,""],SERVICER_FAILURE:[5,4,1,""],TRANSMISSION_FAILURE:[5,4,1,""]},"grpc.framework.base.interfaces.End":{add_idle_action:[5,2,1,""],operation_stats:[5,2,1,""]},"grpc.framework.base.interfaces.ForeLink":{accept_back_to_front_ticket:[5,2,1,""],join_rear_link:[5,2,1,""]},"grpc.framework.base.interfaces.Front":{operate:[5,2,1,""]},"grpc.framework.base.interfaces.FrontToBackTicket":{Kind:[5,1,1,""],kind:[5,4,1,""],name:[5,4,1,""],operation_id:[5,4,1,""],payload:[5,4,1,""],sequence_number:[5,4,1,""],subscription:[5,4,1,""],timeout:[5,4,1,""],trace_id:[5,4,1,""]},"grpc.framework.base.interfaces.FrontToBackTicket.Kind":{CANCELLATION:[5,4,1,""],COMMENCEMENT:[5,4,1,""],COMPLETION:[5,4,1,""],CONTINUATION:[5,4,1,""],ENTIRE:[5,4,1,""],EXPIRATION:[5,4,1,""],RECEPTION_FAILURE:[5,4,1,""],SERVICED_FAILURE:[5,4,1,""],SERVICER_FAILURE:[5,4,1,""],TRANSMISSION_FAILURE:[5,4,1,""]},"grpc.framework.base.interfaces.Operation":{cancel:[5,2,1,""],consumer:[5,4,1,""],context:[5,4,1,""]},"grpc.framework.base.interfaces.OperationContext":{add_termination_callback:[5,2,1,""],fail:[5,2,1,""],is_active:[5,2,1,""],time_remaining:[5,2,1,""],trace_id:[5,4,1,""]},"grpc.framework.base.interfaces.Outcome":{CANCELLED:[5,4,1,""],COMPLETED:[5,4,1,""],EXPIRED:[5,4,1,""],RECEPTION_FAILURE:[5,4,1,""],SERVICED_FAILURE:[5,4,1,""],SERVICER_FAILURE:[5,4,1,""],TRANSMISSION_FAILURE:[5,4,1,""]},"grpc.framework.base.interfaces.RearLink":{accept_front_to_back_ticket:[5,2,1,""],join_fore_link:[5,2,1,""]},"grpc.framework.base.interfaces.ServicedIngestor":{consumer:[5,2,1,""]},"grpc.framework.base.interfaces.ServicedSubscription":{Kind:[5,1,1,""],ingestor:[5,4,1,""],kind:[5,4,1,""]},"grpc.framework.base.interfaces.ServicedSubscription.Kind":{FULL:[5,4,1,""],NONE:[5,4,1,""],TERMINATION_ONLY:[5,4,1,""]},"grpc.framework.base.interfaces.Servicer":{service:[5,2,1,""]},"grpc.framework.base.util":{full_serviced_subscription:[5,3,1,""],none_serviced_subscription:[5,3,1,""],termination_only_serviced_subscription:[5,3,1,""],wait_for_idle:[5,3,1,""]},"grpc.framework.common":{cardinality:[6,0,0,"-"],style:[6,0,0,"-"]},"grpc.framework.common.cardinality":{Cardinality:[6,1,1,""]},"grpc.framework.common.cardinality.Cardinality":{STREAM_STREAM:[6,4,1,""],STREAM_UNARY:[6,4,1,""],UNARY_STREAM:[6,4,1,""],UNARY_UNARY:[6,4,1,""]},"grpc.framework.common.style":{Service:[6,1,1,""]},"grpc.framework.common.style.Service":{EVENT:[6,4,1,""],INLINE:[6,4,1,""]},"grpc.framework.core":{implementations:[7,0,0,"-"]},"grpc.framework.core.implementations":{invocation_end_link:[7,3,1,""],service_end_link:[7,3,1,""]},"grpc.framework.crust":{implementations:[8,0,0,"-"]},"grpc.framework.crust.implementations":{dynamic_stub:[8,3,1,""],generic_stub:[8,3,1,""],servicer:[8,3,1,""]},"grpc.framework.face":{demonstration:[9,0,0,"-"],exceptions:[9,0,0,"-"],implementations:[9,0,0,"-"],interfaces:[9,0,0,"-"],utilities:[9,0,0,"-"]},"grpc.framework.face.demonstration":{LinkedPair:[9,1,1,""],server_and_stub:[9,3,1,""]},"grpc.framework.face.demonstration.LinkedPair":{server:[9,4,1,""],shut_down:[9,2,1,""],stub:[9,4,1,""]},"grpc.framework.face.exceptions":{CancellationError:[9,5,1,""],ExpirationError:[9,5,1,""],NetworkError:[9,5,1,""],NoSuchMethodError:[9,5,1,""],RpcError:[9,5,1,""],ServicedError:[9,5,1,""],ServicerError:[9,5,1,""]},"grpc.framework.face.exceptions.NoSuchMethodError":{name:[9,4,1,""]},"grpc.framework.face.implementations":{dynamic_stub:[9,3,1,""],generic_stub:[9,3,1,""],servicer:[9,3,1,""]},"grpc.framework.face.interfaces":{Abortion:[9,1,1,""],Call:[9,1,1,""],CancellableIterator:[9,1,1,""],DynamicStub:[9,1,1,""],GenericStub:[9,1,1,""],MethodImplementation:[9,1,1,""],MultiMethodImplementation:[9,1,1,""],RpcContext:[9,1,1,""],StreamStreamMultiCallable:[9,1,1,""],StreamUnaryMultiCallable:[9,1,1,""],UnaryStreamMultiCallable:[9,1,1,""],UnaryUnaryMultiCallable:[9,1,1,""]},"grpc.framework.face.interfaces.Abortion":{CANCELLED:[9,4,1,""],EXPIRED:[9,4,1,""],NETWORK_FAILURE:[9,4,1,""],SERVICED_FAILURE:[9,4,1,""],SERVICER_FAILURE:[9,4,1,""]},"grpc.framework.face.interfaces.Call":{cancel:[9,2,1,""],context:[9,4,1,""]},"grpc.framework.face.interfaces.CancellableIterator":{cancel:[9,2,1,""],next:[9,2,1,""]},"grpc.framework.face.interfaces.GenericStub":{blocking_stream_in_value_out:[9,2,1,""],blocking_value_in_value_out:[9,2,1,""],event_stream_in_stream_out:[9,2,1,""],event_stream_in_value_out:[9,2,1,""],event_value_in_stream_out:[9,2,1,""],event_value_in_value_out:[9,2,1,""],future_stream_in_value_out:[9,2,1,""],future_value_in_value_out:[9,2,1,""],inline_stream_in_stream_out:[9,2,1,""],inline_value_in_stream_out:[9,2,1,""],stream_stream_multi_callable:[9,2,1,""],stream_unary_multi_callable:[9,2,1,""],unary_stream_multi_callable:[9,2,1,""],unary_unary_multi_callable:[9,2,1,""]},"grpc.framework.face.interfaces.MethodImplementation":{cardinality:[9,4,1,""],stream_stream_event:[9,4,1,""],stream_stream_inline:[9,4,1,""],stream_unary_event:[9,4,1,""],stream_unary_inline:[9,4,1,""],style:[9,4,1,""],unary_stream_event:[9,4,1,""],unary_stream_inline:[9,4,1,""],unary_unary_event:[9,4,1,""],unary_unary_inline:[9,4,1,""]},"grpc.framework.face.interfaces.MultiMethodImplementation":{service:[9,2,1,""]},"grpc.framework.face.interfaces.RpcContext":{add_abortion_callback:[9,2,1,""],is_active:[9,2,1,""],time_remaining:[9,2,1,""]},"grpc.framework.face.interfaces.StreamStreamMultiCallable":{event:[9,2,1,""]},"grpc.framework.face.interfaces.StreamUnaryMultiCallable":{event:[9,2,1,""],future:[9,2,1,""]},"grpc.framework.face.interfaces.UnaryStreamMultiCallable":{event:[9,2,1,""]},"grpc.framework.face.interfaces.UnaryUnaryMultiCallable":{event:[9,2,1,""],future:[9,2,1,""]},"grpc.framework.face.utilities":{stream_stream_event:[9,3,1,""],stream_stream_inline:[9,3,1,""],stream_unary_event:[9,3,1,""],stream_unary_inline:[9,3,1,""],unary_stream_event:[9,3,1,""],unary_stream_inline:[9,3,1,""],unary_unary_event:[9,3,1,""],unary_unary_inline:[9,3,1,""]},"grpc.framework.foundation":{abandonment:[10,0,0,"-"],activated:[10,0,0,"-"],callable_util:[10,0,0,"-"],future:[10,0,0,"-"],later:[10,0,0,"-"],logging_pool:[10,0,0,"-"],relay:[10,0,0,"-"],stream:[10,0,0,"-"],stream_util:[10,0,0,"-"]},"grpc.framework.foundation.abandonment":{Abandoned:[10,5,1,""]},"grpc.framework.foundation.activated":{Activated:[10,1,1,""]},"grpc.framework.foundation.activated.Activated":{start:[10,2,1,""],stop:[10,2,1,""]},"grpc.framework.foundation.callable_util":{Outcome:[10,1,1,""],call_logging_exceptions:[10,3,1,""],with_exceptions_logged:[10,3,1,""]},"grpc.framework.foundation.callable_util.Outcome":{Kind:[10,1,1,""],exception:[10,4,1,""],kind:[10,4,1,""],return_value:[10,4,1,""]},"grpc.framework.foundation.callable_util.Outcome.Kind":{RAISED:[10,4,1,""],RETURNED:[10,4,1,""]},"grpc.framework.foundation.future":{CancelledError:[10,5,1,""],Future:[10,1,1,""],TimeoutError:[10,5,1,""]},"grpc.framework.foundation.future.Future":{add_done_callback:[10,2,1,""],cancel:[10,2,1,""],cancelled:[10,2,1,""],done:[10,2,1,""],exception:[10,2,1,""],result:[10,2,1,""],running:[10,2,1,""],traceback:[10,2,1,""]},"grpc.framework.foundation.later":{later:[10,3,1,""]},"grpc.framework.foundation.logging_pool":{pool:[10,3,1,""]},"grpc.framework.foundation.relay":{Relay:[10,1,1,""],pool_relay:[10,3,1,""],relay:[10,3,1,""]},"grpc.framework.foundation.relay.Relay":{add_value:[10,2,1,""],set_behavior:[10,2,1,""]},"grpc.framework.foundation.stream":{Consumer:[10,1,1,""]},"grpc.framework.foundation.stream.Consumer":{consume:[10,2,1,""],consume_and_terminate:[10,2,1,""],terminate:[10,2,1,""]},"grpc.framework.foundation.stream_util":{IterableConsumer:[10,1,1,""],ThreadSwitchingConsumer:[10,1,1,""],TransformingConsumer:[10,1,1,""]},"grpc.framework.foundation.stream_util.IterableConsumer":{consume:[10,2,1,""],consume_and_terminate:[10,2,1,""],next:[10,2,1,""],terminate:[10,2,1,""]},"grpc.framework.foundation.stream_util.ThreadSwitchingConsumer":{consume:[10,2,1,""],consume_and_terminate:[10,2,1,""],terminate:[10,2,1,""]},"grpc.framework.foundation.stream_util.TransformingConsumer":{consume:[10,2,1,""],consume_and_terminate:[10,2,1,""],terminate:[10,2,1,""]},"grpc.framework.interfaces":{base:[12,0,0,"-"],face:[13,0,0,"-"],links:[14,0,0,"-"]},"grpc.framework.interfaces.base":{base:[12,0,0,"-"],utilities:[12,0,0,"-"]},"grpc.framework.interfaces.base.base":{Completion:[12,1,1,""],End:[12,1,1,""],NoSuchMethodError:[12,5,1,""],OperationContext:[12,1,1,""],Operator:[12,1,1,""],Outcome:[12,1,1,""],ProtocolReceiver:[12,1,1,""],Servicer:[12,1,1,""],Subscription:[12,1,1,""]},"grpc.framework.interfaces.base.base.Completion":{code:[12,4,1,""],message:[12,4,1,""],terminal_metadata:[12,4,1,""]},"grpc.framework.interfaces.base.base.End":{add_idle_action:[12,2,1,""],operate:[12,2,1,""],operation_stats:[12,2,1,""],start:[12,2,1,""],stop:[12,2,1,""]},"grpc.framework.interfaces.base.base.NoSuchMethodError":{code:[12,4,1,""],details:[12,4,1,""]},"grpc.framework.interfaces.base.base.OperationContext":{add_termination_callback:[12,2,1,""],cancel:[12,2,1,""],fail:[12,2,1,""],outcome:[12,2,1,""],time_remaining:[12,2,1,""]},"grpc.framework.interfaces.base.base.Operator":{advance:[12,2,1,""]},"grpc.framework.interfaces.base.base.Outcome":{Kind:[12,1,1,""],code:[12,4,1,""],details:[12,4,1,""],kind:[12,4,1,""]},"grpc.framework.interfaces.base.base.Outcome.Kind":{CANCELLED:[12,4,1,""],COMPLETED:[12,4,1,""],EXPIRED:[12,4,1,""],LOCAL_FAILURE:[12,4,1,""],LOCAL_SHUTDOWN:[12,4,1,""],RECEPTION_FAILURE:[12,4,1,""],REMOTE_FAILURE:[12,4,1,""],REMOTE_SHUTDOWN:[12,4,1,""],TRANSMISSION_FAILURE:[12,4,1,""]},"grpc.framework.interfaces.base.base.ProtocolReceiver":{context:[12,2,1,""]},"grpc.framework.interfaces.base.base.Servicer":{service:[12,2,1,""]},"grpc.framework.interfaces.base.base.Subscription":{Kind:[12,1,1,""],allowance:[12,4,1,""],kind:[12,4,1,""],operator:[12,4,1,""],protocol_receiver:[12,4,1,""],termination_callback:[12,4,1,""]},"grpc.framework.interfaces.base.base.Subscription.Kind":{FULL:[12,4,1,""],NONE:[12,4,1,""],TERMINATION_ONLY:[12,4,1,""]},"grpc.framework.interfaces.base.utilities":{completion:[12,3,1,""],full_subscription:[12,3,1,""]},"grpc.framework.interfaces.face":{face:[13,0,0,"-"],utilities:[13,0,0,"-"]},"grpc.framework.interfaces.face.face":{Abortion:[13,1,1,""],AbortionError:[13,5,1,""],Call:[13,1,1,""],CancellationError:[13,5,1,""],DynamicStub:[13,1,1,""],ExpirationError:[13,5,1,""],GenericStub:[13,1,1,""],LocalError:[13,5,1,""],LocalShutdownError:[13,5,1,""],MethodImplementation:[13,1,1,""],MultiMethodImplementation:[13,1,1,""],NetworkError:[13,5,1,""],NoSuchMethodError:[13,5,1,""],RemoteError:[13,5,1,""],RemoteShutdownError:[13,5,1,""],ResponseReceiver:[13,1,1,""],RpcContext:[13,1,1,""],ServicerContext:[13,1,1,""],StreamStreamMultiCallable:[13,1,1,""],StreamUnaryMultiCallable:[13,1,1,""],UnaryStreamMultiCallable:[13,1,1,""],UnaryUnaryMultiCallable:[13,1,1,""]},"grpc.framework.interfaces.face.face.Abortion":{Kind:[13,1,1,""],code:[13,4,1,""],details:[13,4,1,""],initial_metadata:[13,4,1,""],kind:[13,4,1,""],terminal_metadata:[13,4,1,""]},"grpc.framework.interfaces.face.face.Abortion.Kind":{CANCELLED:[13,4,1,""],EXPIRED:[13,4,1,""],LOCAL_FAILURE:[13,4,1,""],LOCAL_SHUTDOWN:[13,4,1,""],NETWORK_FAILURE:[13,4,1,""],REMOTE_FAILURE:[13,4,1,""],REMOTE_SHUTDOWN:[13,4,1,""]},"grpc.framework.interfaces.face.face.Call":{code:[13,2,1,""],details:[13,2,1,""],initial_metadata:[13,2,1,""],terminal_metadata:[13,2,1,""]},"grpc.framework.interfaces.face.face.GenericStub":{blocking_stream_unary:[13,2,1,""],blocking_unary_unary:[13,2,1,""],event_stream_stream:[13,2,1,""],event_stream_unary:[13,2,1,""],event_unary_stream:[13,2,1,""],event_unary_unary:[13,2,1,""],future_stream_unary:[13,2,1,""],future_unary_unary:[13,2,1,""],inline_stream_stream:[13,2,1,""],inline_unary_stream:[13,2,1,""],stream_stream:[13,2,1,""],stream_unary:[13,2,1,""],unary_stream:[13,2,1,""],unary_unary:[13,2,1,""]},"grpc.framework.interfaces.face.face.MethodImplementation":{cardinality:[13,4,1,""],stream_stream_event:[13,4,1,""],stream_stream_inline:[13,4,1,""],stream_unary_event:[13,4,1,""],stream_unary_inline:[13,4,1,""],style:[13,4,1,""],unary_stream_event:[13,4,1,""],unary_stream_inline:[13,4,1,""],unary_unary_event:[13,4,1,""],unary_unary_inline:[13,4,1,""]},"grpc.framework.interfaces.face.face.MultiMethodImplementation":{service:[13,2,1,""]},"grpc.framework.interfaces.face.face.NoSuchMethodError":{group:[13,4,1,""],name:[13,4,1,""]},"grpc.framework.interfaces.face.face.ResponseReceiver":{complete:[13,2,1,""],initial_metadata:[13,2,1,""],response:[13,2,1,""]},"grpc.framework.interfaces.face.face.RpcContext":{add_abortion_callback:[13,2,1,""],cancel:[13,2,1,""],is_active:[13,2,1,""],protocol_context:[13,2,1,""],time_remaining:[13,2,1,""]},"grpc.framework.interfaces.face.face.ServicerContext":{code:[13,2,1,""],details:[13,2,1,""],initial_metadata:[13,2,1,""],invocation_metadata:[13,2,1,""],terminal_metadata:[13,2,1,""]},"grpc.framework.interfaces.face.face.StreamStreamMultiCallable":{event:[13,2,1,""]},"grpc.framework.interfaces.face.face.StreamUnaryMultiCallable":{event:[13,2,1,""],future:[13,2,1,""]},"grpc.framework.interfaces.face.face.UnaryStreamMultiCallable":{event:[13,2,1,""]},"grpc.framework.interfaces.face.face.UnaryUnaryMultiCallable":{event:[13,2,1,""],future:[13,2,1,""]},"grpc.framework.interfaces.face.utilities":{stream_stream_event:[13,3,1,""],stream_stream_inline:[13,3,1,""],stream_unary_event:[13,3,1,""],stream_unary_inline:[13,3,1,""],unary_stream_event:[13,3,1,""],unary_stream_inline:[13,3,1,""],unary_unary_event:[13,3,1,""],unary_unary_inline:[13,3,1,""]},"grpc.framework.interfaces.links":{links:[14,0,0,"-"],utilities:[14,0,0,"-"]},"grpc.framework.interfaces.links.links":{Link:[14,1,1,""],Protocol:[14,1,1,""],Ticket:[14,1,1,""]},"grpc.framework.interfaces.links.links.Link":{accept_ticket:[14,2,1,""],join_link:[14,2,1,""]},"grpc.framework.interfaces.links.links.Protocol":{Kind:[14,1,1,""],kind:[14,4,1,""],value:[14,4,1,""]},"grpc.framework.interfaces.links.links.Protocol.Kind":{CALL_OPTION:[14,4,1,""],INVOCATION_CONTEXT:[14,4,1,""],SERVICER_CONTEXT:[14,4,1,""]},"grpc.framework.interfaces.links.links.Ticket":{Subscription:[14,1,1,""],Termination:[14,1,1,""],allowance:[14,4,1,""],code:[14,4,1,""],group:[14,4,1,""],initial_metadata:[14,4,1,""],message:[14,4,1,""],method:[14,4,1,""],operation_id:[14,4,1,""],payload:[14,4,1,""],protocol:[14,4,1,""],sequence_number:[14,4,1,""],subscription:[14,4,1,""],terminal_metadata:[14,4,1,""],termination:[14,4,1,""],timeout:[14,4,1,""]},"grpc.framework.interfaces.links.links.Ticket.Subscription":{FULL:[14,4,1,""],NONE:[14,4,1,""],TERMINATION:[14,4,1,""]},"grpc.framework.interfaces.links.links.Ticket.Termination":{CANCELLATION:[14,4,1,""],COMPLETION:[14,4,1,""],EXPIRATION:[14,4,1,""],LOCAL_FAILURE:[14,4,1,""],RECEPTION_FAILURE:[14,4,1,""],REMOTE_FAILURE:[14,4,1,""],SHUTDOWN:[14,4,1,""],TRANSMISSION_FAILURE:[14,4,1,""]},grpc:{beta:[1,0,0,"-"],early_adopter:[2,0,0,"-"],framework:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"0x7f177b32fe30":[],"0x7f177b32fe40":[],"0x7f6fad6a6e30":[],"0x7f6fad6a6e40":[],"0x7f788b900e30":10,"0x7f788b900e40":10,"0x7fb2f1a53630":[],"0x7fb2f1a53640":[],"__enter__":10,"_base":10,"abstract":10,"boolean":[1,5],"case":[4,5,9,13],"class":[1,4,5,6,9,10,12,13,14],"default":[1,2,5,7],"enum":[1,4,5,6,9,10,12,13,14],"float":[4,5,9,12,13],"function":[1,5,10,12],"long":10,"new":[1,12],"null":[],"return":[1,2,4,5,7,8,9,10,12,13],"super":[4,9,13],"transient":1,"true":[1,10,13],"try":10,"while":[1,4],abandon:[],abl:[9,13],abort:[1,4,5,9,12,13],abortion_callback:[4,9,13],abortionerror:13,about:[5,9,10,12],abov:10,absenc:10,accept:[4,5,9,10,12,13,14],accept_back_to_front_ticket:5,accept_front_to_back_ticket:5,accept_ticket:14,access:[4,9,10,13],accessor:10,action:[4,5,9,12,13],activ:[],actual:5,add:[5,10,12],add_abortion_callback:[4,9,13],add_done_callback:10,add_idle_act:[5,12],add_insecure_port:1,add_secure_port:1,add_termination_callback:[5,12],add_valu:10,addit:[5,12,13,14],additional_call_credenti:1,address:1,adopt:10,advanc:12,afford:[2,4,5,9,10,12,13,14],after:[1,5,12],again:1,aggreg:12,all:[1,4,5,8,9,10,12,13,14],allot:[5,7,10],allow:[1,2,4,5,9,10,12,13,14],along:12,alpha:[],alreadi:[1,10,12,13],already_exist:1,also:[1,10],alwai:1,among:5,ani:[1,2,5,8,9,10,12,13,14],anoth:[1,2,9,10],anyon:10,anyth:12,api:1,appear:[10,14],applic:[1,12,14],appropri:4,arbitrari:12,arg:[9,10],argument:[4,5,10,12],arriv:7,ask:[1,2],aspect:4,assert:1,associ:[4,12],assum:[9,13],async:4,asynchron:[4,9,13],asynchroni:10,asyncio:10,attempt:[1,10],attribut:[1,4,9,13],authent:1,automat:2,avail:[4,10,12,13],back:[2,5,14],back_link:5,backlink:5,backtofrontticket:5,base:[],base_interfac:9,becam:10,becom:[1,10,12],been:[1,4,5,9,10,12,13],befor:[1,4,5,9,10,12,13],begin:[5,10,14],begun:10,behavior:[1,4,9,10,12,13],belong:[5,14],beta:[],between:[10,12,14],block:[4,9,10,13],blocking_stream_in_value_out:9,blocking_stream_unari:13,blocking_unary_unari:13,blocking_value_in_value_out:9,both:[4,5,7,10,12,13],bound:[4,9],broken:[5,12],built:10,bytestr:4,call:[1,4,5,8,9,10,12,13,14],call_credenti:1,call_logging_except:10,call_opt:14,callabl:[1,2,4,5,9,10,12,13],callable_util:[],callback:[1,4,5,9,10,12,13],callcredenti:1,caller:9,can:[1,12],cancel:[1,4,5,9,10,12,13,14],cancellableiter:[4,9],cancellationerror:[4,9,13],cancellederror:10,cannot:[1,10],cardin:[],carri:4,categori:[4,9],certif:[1,2],certificate_chain:[1,2],chain:[1,2],chang:1,channel:1,channel_credenti:1,channel_ready_futur:1,channelconnect:1,channelcredenti:1,check:2,choic:5,choos:12,circumst:10,classifi:6,client:1,clientish:5,coars:12,code:[1,9,12,13,14],commenc:[5,10,12],commin:14,common:[],commun:[1,2,12,14],compat:10,complet:[1,4,5,9,10,12,13,14],compos:1,composite_call_credenti:1,composite_channel_credenti:1,compress:1,comput:[4,9,10],concret:10,concurr:10,conduct:[1,12],connect:[1,2],connectivityst:1,consid:[4,5,9,12,13],constant:[1,4],constitut:5,construct:[1,2,4],constructor:1,consum:[5,9,10,13],consume_and_termin:10,contain:1,context:[4,5,9,10,12,13,14],contextu:[5,12],continu:[1,5,12],control:[1,6,10,12],core:[],correspond:[1,4,13],cours:9,creat:[1,2,4,5,7,8,9,10,12,13],creation:1,credenti:1,crust:[],current:5,custom:[1,5,9,12,13,14],data:[1,12,13],data_loss:1,deactiv:[1,10],deadline_exceed:1,decor:[2,10],default_timeout:[1,5,7,9],defect:[10,13],defer:10,defin:[1,5,6,10,13],delai:10,demonstr:[],deriv:[9,13],describ:[2,4,5,6,9,10,12,13,14],descript:4,deseri:[1,4],deserialize_request:4,deserialize_respons:4,detail:[12,13],determin:10,dict:[8,9],dictionari:[1,2,5,8,9,12],did:[1,10],differ:[1,10],direct:[4,12,14],directli:4,disabl:1,disable_compress:1,disable_next_request_compress:1,disable_next_response_compress:1,distinct:12,doe:[1,9,10,12,13],doesn:10,done:10,down:[5,9,12],downstream:10,draw:[9,13],driven:[9,13],drop:10,due:13,durat:[1,4,5,9,12,13],dure:[9,12,14],dynamic_stub:[1,8,9],dynamicstub:[1,8,9,13],each:[1,12,14],earli:1,earlier:14,early_adopt:[],effect:[1,13],either:[9,10,12,13,14],element:[1,12],els:12,emit:[5,10,13,14],enabl:[1,10],encapsul:1,encod:[1,2],end:[5,7,8,12,14],entir:[5,10,14],entri:[1,2,5,7,8,9,12],equal:[5,10,14],error:[9,13],establish:1,even:[5,9,13,14],event:[1,4,6,9,12,13],event_stream_in_stream_out:9,event_stream_in_stream_out_method:9,event_stream_in_value_out:9,event_stream_in_value_out_method:9,event_stream_stream:13,event_stream_unari:13,event_unary_stream:13,event_unary_unari:13,event_value_in_stream_out:9,event_value_in_stream_out_method:9,event_value_in_value_out:9,event_value_in_value_out_method:9,ever:12,everi:[1,8,9],exampl:12,except:[],excess:5,exchang:[5,7,12,14],execut:[4,10],exist:1,expect:1,expir:[4,5,9,12,13,14],expirationerror:[4,9,13],expos:1,extens:[5,14],face:[],factori:5,fail:[5,9,12,13],failed_precondit:1,failur:[1,4,5,9,12,13,14],fals:[1,2,10,13],fatal:1,fatal_failur:1,finish:[10,12],finit:10,fire:5,first:[1,12,14],flow:[6,10,12],follow:[4,9,13],forcefulli:12,fore_link:5,forelink:5,forget:5,foundat:[],four:4,framework:[],from:[1,2,4,5,8,9,10,12,13,14],front:[5,9,14],front_link:5,frontlink:5,fronttobackticket:5,full:[1,2,5,12,14],full_serviced_subscript:5,full_subscript:12,fulli:1,further:[1,14],futur:[],future_stream_in_value_out:9,future_stream_unari:13,future_unary_unari:13,future_value_in_value_out:9,gener:[9,10,13],generic_stub:[1,8,9],genericstub:[1,8,9,13],german:[5,12],given:[1,2,4,5,8,9,10,12,13],grace:[1,12],grant:14,group:[8,12,13,14],grpc_call_opt:1,grpc_connectivity_st:1,grpc_status_cod:1,grpcauthmetadatacontext:1,grpcauthmetadataplugin:1,grpcauthmetadataplugincallback:1,grpccallopt:1,grpcinvocationcontext:1,grpcservicercontext:1,guarante:[8,9,10],had:[1,12],handl:[12,14],hashabl:[5,14],have:[1,4,5,9,10,12,13],help:[5,10],high:14,host:[1,2],how:[10,12,13],idempot:[1,13],ident:1,identifi:[1,4,5,8,9,10,12,13,14],idl:1,ignor:[1,5,10,14],immedi:[1,4,10,12],implement:[],in_memori:[],includ:[1,10,13],incompat:10,index:[5,14,15],indic:[],inform:[1,4,5,9,12,13,14],ingestor:5,initi:[5,12,13],initial_metadata:[12,13,14],inlin:[6,9,13],inline_stream_in_stream_out:9,inline_stream_in_stream_out_method:9,inline_stream_in_value_out_method:9,inline_stream_stream:13,inline_unary_stream:13,inline_value_in_stream_out:9,inline_value_in_stream_out_method:9,inline_value_in_value_out_method:9,input:[5,10],insecur:[1,2],insecure_channel:1,instanc:[1,4,9,13],instanti:[4,9],instead:10,integ:[1,5,12,14],interest:[5,12,14],interfac:[],intermediary_low_channel:1,intern:1,interrupt:10,invalid_argu:1,invoc:[1,2,4,5,7,9,13,14],invocation_context:14,invocation_end_link:7,invocation_metadata:13,invok:[1,4,5,9,10,12,13],is_act:[4,5,9,13],iter:[4,9,10,13],iterableconsum:10,join:5,join_fore_link:5,join_link:14,join_rear_link:5,kei:[1,2],keyword:[1,10],kind:[5,10,12,13,14],known:[10,13],kwarg:10,larg:5,larger:1,later:[],layer:[5,7,8,9,13],length:[1,4,5,7,9,10,12,13,14],level:14,librari:10,like:1,limit:[5,10],link:[],linkedpair:9,list:10,local:[12,13,14],local_failur:[12,13,14],local_shutdown:[12,13],localerror:13,localshutdownerror:13,locat:[1,2],log:10,logging_pool:[],longer:[5,12],low:14,low_channel:1,low_credenti:1,made:[1,8,10],mai:[1,4,5,9,10,12,13,14],make:[1,10],manag:[4,10],mani:[9,13],map:9,mate:[5,14],matter:[1,10,14],matur:1,max_work:10,maximum:[2,5,7,10],maximum_timeout:[1,5,7],mean:12,measur:[5,14],memori:5,mere:1,messag:[10,12,14],metadata:[1,2,12,13,14],metadata_call_credenti:1,metadata_plugin:1,metadata_transform:[1,2],method:[1,2,4,5,6,8,9,10,12,13,14],method_implement:[8,9],method_nam:1,methodimplement:[1,8,9,13],minimum:10,mirror:1,more:[4,10,12],most:[10,14],much:[1,12],multi:9,multi_method:9,multi_method_implement:[1,8,9],multimethod:[9,13],multimethodimplement:[1,8,9,13],must:[1,5,9,10,12,13,14],name:[1,2,4,5,8,9,12,13,14],ndb:10,need:13,network:[4,9,13],network_failur:[4,9,13],networkerror:[9,13],next:[1,4,9,10],non:[9,12,13,14],none:[1,2,5,8,9,10,12,13,14],none_serviced_subscript:5,nonempti:1,nonneg:[4,5,9,12,13],nonzero:14,nosuchmethoderror:[5,9,12,13],not_found:1,now:10,number:[1,2,5,10,12,14],numer:[4,10],object:[1,2,4,5,7,8,9,10,12,13,14],occur:[9,13],omit:1,onc:[1,12],ongo:[1,5,10,12],onli:[1,2,4,5,8,9,10,12,13],open:1,oper:[5,7,10,12,14],operation_context:5,operation_id:[5,14],operation_stat:[5,12],operationcontext:[5,12],operaton:12,option:[1,5,14],order:10,other:[1,2,5,10,12,13,14],otherwis:[5,10,12],out:[4,5,9,10,12,13],out_of_rang:1,outcom:[5,9,10,12],output:[5,12,13],output_consum:5,output_oper:12,over:[1,10],overal:[5,12],own:10,page:15,pair:[1,9,12,13],param:4,paramet:[1,2,4,5,7,8,9,10,12,13,14],part:14,particip:12,particular:[5,10,14],pass:[1,4,5,8,9,10,12,13,14],past:10,payload:[5,12,14],peer:[1,5,14],pem:[1,2],per:[4,9],perform:[5,8,9,10],period:[1,12],permiss:14,permission_deni:1,place:[5,10,14],plugin:1,point:[1,2,5,7,8,9,12],pool:[1,2,5,8,9,10],pool_relai:10,port:[1,2,4],posit:[5,10,12,14],possibl:10,prefix:9,prepend:9,present:[4,5,10,14],previou:1,previous:1,privat:[1,2,10],private_kei:[1,2],private_key_certificate_chain_pair:1,procedur:12,produc:[1,2],program:10,progress:[1,5,12,14],protocol:[4,9,10,12,14],protocol_context:[12,13],protocol_opt:[12,13],protocol_receiv:12,protocolreceiv:12,provid:[1,4,5,9,12,13,14],python:[1,10],qualifi:[1,2],rais:[4,5,9,10,12,13],rather:10,readi:1,rear_link:5,rearlink:5,reason:[5,10,12],receipt:14,receiv:[1,5,12,13,14],recept:[5,12,14],reception_failur:[5,12,14],recogn:[9,13],recov:1,reduct:[5,14],refus:12,regist:[1,4,9,10,13],relai:[],relat:[4,5,9,10,12,13],releas:9,remain:[4,5,9,12,13],remot:[1,10,12,13,14],remote_failur:[12,13,14],remote_shutdown:[12,13],remoteerror:13,remoteshutdownerror:13,report:[4,5,12],repres:[4,5,9,10,12],represent:[5,9,10],request:[1,4,5,6,9,13,14],request_deseri:[1,4],request_iter:[4,9,13],request_seri:[1,4],requir:1,require_client_auth:1,reserv:1,resourc:9,resource_exhaust:1,respect:[5,10,14],respond:[4,13],respons:[1,4,5,6,9,13],responsd:9,response_callback:9,response_consum:[9,13],response_deseri:[1,4],response_seri:[1,4],responsereceiv:13,restpons:9,result:[4,5,9,10,12,13],retriev:[1,2],return_valu:10,root:[1,2],root_certif:[1,2],rpc:[1,2,4,5,6,8,9,12,13,14],rpccontext:[4,9,13],rpcerror:[4,9],rpcmethoddescript:4,rpcmethodinvocationdescript:[2,4],rpcmethodservicedescript:[2,4],run:10,same:[1,10,14],schedul:10,scope:13,search:15,second:[1,4,5,7,9,10,12,13],secur:[1,2],secure_channel:1,see:5,seen:1,select:2,semant:[6,14],send:5,sent:[5,12,14],separ:10,sequenc:[1,5,14],sequence_numb:[5,14],serial:[1,4,10],serialize_request:4,serialize_respons:4,serialized_request:4,serialized_respons:4,serv:[1,2,4],server:[1,2,4,9],server_and_stub:9,server_credenti:1,server_host_overrid:2,server_opt:1,servercredenti:1,serverish:5,serveropt:1,servic:[1,2,4,5,6,7,8,9,12,13,14],service_end_link:7,service_implement:1,service_nam:2,service_stream_stream:4,service_stream_unari:4,service_unary_stream:4,service_unary_unari:4,service_url:1,serviced_failur:[4,5,9],servicederror:9,servicedingestor:5,servicedsubscript:5,servicer_context:14,servicer_failur:[4,5,9],servicercontext:[5,13],servicererror:9,set:[1,5,10,12,13,14],set_behavior:10,should:[1,2,4,9,10,12,13],shut:9,shut_down:9,shutdown:[12,13,14],side:[4,5,9,12,13,14],signal:10,simpli:[9,13],singl:[4,5,7,10,13],sink:10,size:1,smaller:[1,5],some:[1,9,10,12,13],soon:12,sooner:[1,12],sourc:[1,2,4,5,6,7,8,9,10,12,13,14],specif:[1,5,12],specifi:[12,13],ssl:[1,2],ssl_channel_credenti:1,ssl_server_credenti:1,standard:10,start:[1,10,12],state:[12,13],statu:12,statuscod:1,still:12,stock_repli:10,stop:[1,9,10,12,13],stopiter:[4,9],stream:[],stream_stream:[4,6,9,13],stream_stream_ev:[9,13],stream_stream_inlin:[9,13],stream_stream_invocation_descript:4,stream_stream_multi_cal:9,stream_stream_service_descript:4,stream_unari:[4,6,9,13],stream_unary_ev:[9,13],stream_unary_inlin:[9,13],stream_unary_invocation_descript:4,stream_unary_multi_cal:9,stream_unary_service_descript:4,stream_util:[],streamstreammultical:[9,13],streamunarymultical:[9,13],streamunarysyncasync:4,string:[1,9,10],stub:[1,2,4,9],stub_opt:1,stubopt:1,style:[],subcall_of:1,submit:10,submodul:[],subscrib:1,subscript:[1,5,12,14],suitabl:[7,9],sum:[5,9,10,13,14],suppli:[5,10],support:[1,2,7,8,9,12],synchron:4,system:[10,14],take:[4,9,10,13],taken:10,target:2,task:[5,10],tell:1,termin:[4,5,9,10,12,13,14],terminal_metadata:[12,13,14],termination_callback:12,termination_onli:[5,12],termination_only_serviced_subscript:5,test:2,than:[1,10,12,14],thei:[12,13],them:[1,2,5],thereaft:1,thi:[1,4,5,9,10,12,13,14],thread:[1,2,5,8,9,10,12],thread_pool:1,thread_pool_s:[1,2],threadpoolexecutor:[8,9,10],threadswitchingconsum:10,three:10,through:[1,7,12],ticket:[5,7,14],time:[1,4,5,7,9,10,12,13,14],time_remain:[4,5,9,12,13],timeout:[1,4,5,9,10,12,13,14],timeouterror:10,togeth:9,took:10,top:1,trace_id:5,traceback:10,track:1,traffic:2,transfer:12,transform:10,transformingconsum:10,transient_failur:1,translat:7,transmiss:[5,12,14],transmission_failur:[5,12,14],transmission_pool:5,transmit:[5,13,14],transport:14,trivial:5,try_to_connect:1,two:[1,12],type:[1,4,5,9,10,12,13,14],typic:1,unambigu:13,unari:[1,4,6,9,13],unary_stream:[4,6,9,13],unary_stream_ev:[9,13],unary_stream_inlin:[9,13],unary_stream_invocation_descript:4,unary_stream_multi_cal:9,unary_stream_service_descript:4,unary_unari:[4,6,9,13],unary_unary_ev:[9,13],unary_unary_inlin:[9,13],unary_unary_invocation_descript:4,unary_unary_multi_cal:9,unary_unary_service_descript:4,unarystreammultical:[9,13],unaryunarymultical:[9,13],unaryunarysyncasync:4,unauthent:1,unavail:1,under:[10,12],underli:[1,2,4,9,10,13,14],underwai:1,unimpl:1,uniqu:[5,14],unknown:1,unlik:10,unrecogn:[5,9,12,13],unschedul:10,unsubscrib:1,unsupport:1,until:[1,4,9,10,12,13],upon:[1,5,12],url:1,util:[],utility_pool:5,uuid:5,valid:[1,10],valu:[1,4,5,8,9,10,12,13,14],variou:1,veri:1,verifi:1,via:[8,9,12,13],wai:[2,12],wait:[5,10],wait_for_idl:5,what:1,whatev:[4,9],when:[1,4,5,9,10,12,13],whether:[1,2,4,5,9,10,13],which:[1,2,4,5,9,10,12,13,14],wire:[1,2],with_cal:13,with_exceptions_log:10,within:[5,10],without:10,work:[5,10],work_pool:5,worker:10,would:[5,10],wrap:[10,12],yet:[10,12,14],yield:[4,9,13],zero:[1,2,4,5,12,14]},titles:["grpc package","grpc.beta package","grpc.early_adopter package","grpc.framework package","grpc.framework.alpha package","grpc.framework.base package","grpc.framework.common package","grpc.framework.core package","grpc.framework.crust package","grpc.framework.face package","grpc.framework.foundation package","grpc.framework.interfaces package","grpc.framework.interfaces.base package","grpc.framework.interfaces.face package","grpc.framework.interfaces.links package","Welcome to grpcio&#8217;s documentation!"],titleterms:{"null":5,abandon:10,activ:10,alpha:4,base:[5,12],beta:1,callable_util:10,cardin:6,common:6,content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],core:7,crust:8,demonstr:9,document:15,early_adopt:2,except:[4,5,9],face:[9,13],foundat:10,framework:[3,4,5,6,7,8,9,10,11,12,13,14],futur:10,grpc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],grpcio:15,implement:[1,2,5,7,8,9],in_memori:5,indic:15,interfac:[1,4,5,9,11,12,13,14],later:10,link:14,logging_pool:10,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],packag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],relai:10,stream:10,stream_util:10,style:6,submodul:[1,2,4,5,6,7,8,9,10,12,13,14],subpackag:[0,3,11],tabl:15,util:[1,4,5,9,12,13,14],welcom:15}})