import { useMutation, useQuery } from "@tanstack/react-query";
import type { CreatePlaceResponse, FilterParams, HotelFormValues, Place } from "../types";
import api from "./api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const usePlaces = (params?: FilterParams) => 
    useQuery< Place []>({queryKey: ["places", params], queryFn: () => api.get("/places", {params})
    .then((res) => res.data.places),
// hata deneme süresi
retry:3 ,

// hata bekleme sürei
retryDelay: 2000,

// geçerli kalma süre
staleTime:0,

// geçersiz süresi
gcTime:30000,
})

export const usePlace = (id: string) =>
  useQuery<Place>({
    queryKey: ["place", id],
    queryFn: () => api.get(`/place/${id}`).then((res) => res.data.place),
  });


export const useDeletePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["remove"],
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama noktası başarıyla kaldırıldı");
      navigate("/");
    },
    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};


export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["create"],
    mutationFn: (values: HotelFormValues) =>
      api.post<CreatePlaceResponse>("/places", values),
    onSuccess: (res) => {
      toast.success("Konaklama noktası başarıyla oluşturuldu");
      navigate(`/place/${res.data.place.id}`); // detay sayfasına
    },
    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};