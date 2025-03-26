# .DataApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSupplyChain**](DataApi.md#getSupplyChain) | **GET** /market/supply-chain | Get Supply Chain


# **getSupplyChain**
> any getSupplyChain()

Describes which import and exports map to each other.

### Example


```typescript
import { createConfiguration, DataApi } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request = {};

const data = await apiInstance.getSupplyChain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the supply chain information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


