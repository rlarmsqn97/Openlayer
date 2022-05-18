package com.example.openlayer.controller;

import com.example.openlayer.service.CoordinateService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(MockitoExtension.class)
class DataControllerTest {

    @InjectMocks
    private DataController dataController;

    @Mock
    private CoordinateService coordinateService;

    private MockMvc mockMvc;

    @BeforeEach
    public void init() {
        mockMvc = MockMvcBuilders.standaloneSetup(dataController).build();
    }

    @DisplayName("폴리곤좌표 가져오기 성공")
    @Test
    void 폴리곤_좌표_겟() throws Exception {
        //given

    }
}